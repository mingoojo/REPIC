import { collection, onSnapshot } from 'firebase/firestore';
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { appFireStore } from '../firebase/config';
import { firebaseService } from '../service/firebaseService';
import { CommunityItem } from '../type/types';

@singleton()
@Store()
export default class CommunityStore {
  communityItems: CommunityItem[] = [];

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  // 글 불러오기
  async readCommnuityItemsInfo() {
    this.setIsPending(true);
    this.setError(false);
    try {
      this.setIsPending(false);
      this.setError(false);
      await onSnapshot(
        collection(appFireStore, 'Communities'),
        (snapshot) => {
          const results:CommunityItem[] = [];
          snapshot.docs.forEach((docu) => {
            const result = { ...docu.data(), id: docu.id } as CommunityItem;
            results.push(result);
          });
          this.setCommunityItems(results);
        },
      );
    } catch (error) {
      this.setIsPending(false);
      this.setError(true);
    }
  }

  // 조회수 올리기
  async updateItemView({ docId, updateValue }:{docId:string, updateValue:string}) {
    this.setIsPending(true);
    this.setError(false);
    try {
      await firebaseService.writeDocumentFieldArray({
        tranaction: 'Communities', docId, updateKey: 'view', updateValue,
      });
      this.setIsPending(false);
      this.setError(false);
    } catch (error) {
      this.setIsPending(false);
      this.setError(true);
    }
  }

  // 좋아요 숫자 올리기
  async updateItemLikes({ docId, updateValue }:{docId:string, updateValue:string}) {
    this.setIsPending(true);
    this.setError(false);
    try {
      await firebaseService.writeDocumentFieldArray({
        tranaction: 'Communities', docId, updateKey: 'likes', updateValue,
      });
      this.setIsPending(false);
      this.setError(false);
    } catch (error) {
      this.setIsPending(false);
      this.setError(true);
    }
  }

  @Action()
  setCommunityItems(communityItems:CommunityItem[]) {
    this.communityItems = communityItems;
  }

  @Action()
  setError(payload:boolean) {
    this.error = payload;
  }

  @Action()
  setIsPending(payload:boolean) {
    this.isPending = payload;
  }
}
