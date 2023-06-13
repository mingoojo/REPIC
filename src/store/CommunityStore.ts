import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { appAuth, appFireStore, timeStamp } from '../firebase/config';
import { CommunityItem } from '../type/types';

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

  // 글불러오기
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

  // 글쓰기
  async addDocument({ title, text }:{title:string, text:string}) {
    const uid = appAuth.currentUser?.uid || '';
    const likes = [] as string[];
    const comments = [] as Comment[];
    const colRef = collection(appFireStore, 'community');
    this.setIsPending(true);
    this.setSuccess(false);
    this.setError(false);

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
        this.setIsPending(false);
        this.setSuccess(true);
        this.setError(false);
      }
    } catch (err) {
      this.setIsPending(false);
      this.setSuccess(false);
      this.setError(true);
    }
  }
}
