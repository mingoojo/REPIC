import {
  addDoc, arrayUnion, collection, doc, onSnapshot, updateDoc,
} from 'firebase/firestore';
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import {
  appAuth, appFireStore, db, timeStamp,
} from '../firebase/config';
import { Comment, CommunityItem, fetchUpdateCommunityProp } from '../type/types';

@singleton()
@Store()
export default class CommunityStore {
  communityItems:CommunityItem[] = [];

  error = false;

  success = false;

  isPending = false;

  @Action()
  setCommunityItem(payload:CommunityItem[]) {
    this.communityItems = payload;
  }

  @Action()
  setError(payload:boolean) {
    this.error = payload;
  }

  @Action()
  setSuccess(payload:boolean) {
    this.success = payload;
  }

  @Action()
  setIsPending(payload:boolean) {
    this.isPending = payload;
  }

  @Action()
  DefaultSet() {
    this.setIsPending(true);
    this.setSuccess(false);
    this.setError(false);
  }

  @Action()
  DoneSet() {
    this.setIsPending(false);
    this.setSuccess(true);
    this.setError(false);
  }

  @Action()
  ErrorSet() {
    this.setIsPending(false);
    this.setSuccess(false);
    this.setError(true);
  }

  // 커뮤니티 자료 불러오기
  fetchGetCommunity = () => {
    onSnapshot(
      collection(appFireStore, 'community'),
      (snapshot) => {
        const CommunityItems:CommunityItem[] = [];
        snapshot.docs.forEach((docu) => {
          const result = { ...docu.data(), id: docu.id } as CommunityItem;
          CommunityItems.push(result);
        });
        this.setCommunityItem(CommunityItems);
        this.setError(false);
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (Error) => { this.setError(true); },
    );
  };

  // 커뮤니티 자료 생성
  async addDocument({ title, text }:{title:string, text:string}) {
    const uid = appAuth.currentUser?.uid || '';
    const likes = [] as string[];
    const comments = [] as Comment[];
    const view = [0];
    const colRef = collection(appFireStore, 'community');
    this.DefaultSet();

    try {
      const createdTime = timeStamp.fromDate(new Date());
      if (uid === '') {
        // eslint-disable-next-line no-alert
        alert('로그인하세요');
      } else {
        await addDoc(colRef, {
          uid, title, text, createdTime, likes, comments, view,
        }).then(() => {
          // eslint-disable-next-line no-console
          console.log('생성완료');
        });
        this.DoneSet();
      }
    } catch (err) {
      this.ErrorSet();
    }
  }

  // 커뮤니티 자료 업데이트
  async fetchUpdateCommunityLikes({
    tranaction, docId, updateKey, updateValue,
  }:fetchUpdateCommunityProp<string>) {
    const Ref = doc(appFireStore, tranaction, docId);
    this.DefaultSet();
    try {
      await updateDoc(Ref, {
        [updateKey]: arrayUnion(updateValue),
      });
      this.DoneSet();
    } catch (err) {
      this.ErrorSet();
    }
  }

  // 댓글 자료 업데이트
  async fetchUpdateCommunityCommnets({
    tranaction, docId, updateKey, updateValue,
  }:fetchUpdateCommunityProp<Comment>) {
    const Ref = doc(appFireStore, tranaction, docId);
    this.DefaultSet();
    try {
      await updateDoc(Ref, {
        [updateKey]: arrayUnion(updateValue),
      });
      this.DoneSet();
    } catch (err) {
      this.ErrorSet();
    }
  }

  // 방문자수 업데이트
  async fetchUpdateCommunityViews({
    tranaction, docId, updateKey, updateValue,
  } :fetchUpdateCommunityProp<number>) {
    const Ref = doc(db, tranaction, docId);
    this.DefaultSet();
    try {
      await updateDoc(Ref, {
        [updateKey]: arrayUnion(updateValue),
      });
      this.DoneSet();
    } catch (error) {
      this.ErrorSet();
    }
  }
}
