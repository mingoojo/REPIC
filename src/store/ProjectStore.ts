import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { appAuth, appFireStore, timeStamp } from '../firebase/config';
import { CommunityItem, ProjectItem } from '../type/types';

@singleton()
@Store()
export default class ProjectStore {
  projects:ProjectItem[] = [];

  error = false;

  success = false;

  isPending = false;

  @Action()
  setProjects(payload:ProjectItem[]) {
    this.projects = payload;
  }

  @Action()
  setError(payload:boolean) {
    this.error = payload;
  }

  @Action()
  setIsPending(payload:boolean) {
    this.isPending = payload;
  }

  @Action()
  setSuccess(payload:boolean) {
    this.success = payload;
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

  // 프로젝트 자료 불러오기
  fetchGetProject = () => {
    onSnapshot(
      collection(appFireStore, 'projects'),
      (snapshot) => {
        const ProjectItems:ProjectItem[] = [];
        snapshot.docs.forEach((docu) => {
          const result = { ...docu.data(), id: docu.id } as ProjectItem;
          ProjectItems.push(result);
        });
        this.setProjects(ProjectItems);
        this.setError(false);
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (Error) => { this.setError(true); },
    );
  };

  // 글 작성
  async addDocument({
    title, text, stacks, timeline,
  }:{title:string, text:string, timeline:string[], stacks:string[]}) {
    const uid = appAuth.currentUser?.uid || '';
    const likes = [] as string[];
    const view = [0];
    const colRef = collection(appFireStore, 'projects');
    this.DefaultSet();
    console.log('hihi');

    try {
      const createdTime = timeStamp.fromDate(new Date());
      if (uid === '') {
        // eslint-disable-next-line no-alert
        alert('로그인하세요');
      } else {
        await addDoc(colRef, {
          uid, title, text, createdTime, likes, view, stacks, timeline,
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
}
