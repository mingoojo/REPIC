import {
  addDoc, arrayUnion, collection, doc, onSnapshot, updateDoc,
} from 'firebase/firestore';
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { appAuth, appFireStore, timeStamp } from '../firebase/config';
import { Comment, CommunityItem, fetchUpdateCommunityProp } from '../type/types';

@singleton()
@Store()
export default class CommunityStore {
  communityItems:CommunityItem[] = [];

  SelectedcommunityItem:CommunityItem[] = [];

  error = false;

  success = false;

  isPending = false;

  @Action()
  setCommunityItem(payload:CommunityItem[]) {
    this.communityItems = payload;
  }

  @Action()
  setSelectedcommunityItem(payload:CommunityItem[]) {
    this.SelectedcommunityItem = payload;
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
  fetchGetCommunity = (id? :string) => {
    onSnapshot(
      collection(appFireStore, 'community'),
      (snapshot) => {
        const CommunityItems:CommunityItem[] = [];

        const communityItem:CommunityItem[] = [];
        snapshot.docs.forEach((docu) => {
          if (id) {
            const result = { ...docu.data(), id: docu.id } as CommunityItem;
            CommunityItems.push(result);
            if (id === result.id) {
              communityItem.push(result);
            }
          } else {
            const result = { ...docu.data(), id: docu.id } as CommunityItem;
            CommunityItems.push(result);
          }
        });
        this.setCommunityItem(CommunityItems);
        this.setSelectedcommunityItem(communityItem);
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
    const colRef = collection(appFireStore, 'community');
    this.DefaultSet();

    try {
      const createdTime = timeStamp.fromDate(new Date());
      if (uid === '') {
        // eslint-disable-next-line no-alert
        alert('로그인하세요');
      } else {
        await addDoc(colRef, {
          uid, title, text, createdTime, likes, comments,
        }).then(() => {
          // eslint-disable-next-line no-console
          console.log('hihi');
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
}
