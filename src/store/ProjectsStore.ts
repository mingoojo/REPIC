import { collection, onSnapshot } from 'firebase/firestore';
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { appFireStore } from '../firebase/config';
import { Project } from '../type/types';
import { firebaseService } from '../service/firebaseService';

@singleton()
@Store()
export default class ProjectStore {
  projects = [] as Project[];

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  // 글 불러오기
  async readProjectItemsInfo() {
    this.setIsPending(true);
    this.setError(false);
    try {
      this.setIsPending(false);
      this.setError(false);
      await onSnapshot(
        collection(appFireStore, 'Projects'),
        (snapshot) => {
          const results:Project[] = [];
          snapshot.docs.forEach((docu) => {
            const result = { ...docu.data(), id: docu.id } as Project;
            results.push(result);
          });
          this.setProjects(results);
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
        tranaction: 'Projects', docId, updateKey: 'view', updateValue,
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
        tranaction: 'Projects', docId, updateKey: 'likes', updateValue,
      });
      this.setIsPending(false);
      this.setError(false);
    } catch (error) {
      this.setIsPending(false);
      this.setError(true);
    }
  }

  @Action()
  setProjects(projects: Project[]) {
    this.projects = projects;
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
