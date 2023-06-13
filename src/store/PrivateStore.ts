import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { appAuth, appFireStore } from '../firebase/config';

const nullPrivate = {
  id: '',
  uid: '',
  email: '',
  nickName: '',
  introduce: '',
  column: [
    {
      title: '',
      text: '',
    },
  ],

};

type Column = {
  title : string,
  text : string
}

type PrivateData = {
  id : string
  uid : string,
  email : string,
  nickName : string,
  introduce : string,
  column: Column[]
}

@singleton()
@Store()
export default class PrivateStore {
  privateItem:PrivateData[] = [];

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  // 성공여부
  success = false;

  @Action()
  setPrivate(payload: PrivateData[]) {
    this.privateItem = payload;
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

  fetchGetPrivate = () => {
    onSnapshot(
      collection(appFireStore, 'private'),
      (snapshot) => {
        const privateData :PrivateData[] = [];
        snapshot.docs.forEach((docu) => {
          const result = { ...docu.data(), id: docu.id } as PrivateData;
          privateData.push(result);
        });
        this.setPrivate(privateData);
        this.setError(false);
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (Error) => { this.setError(true); },
    );
  };

  // 글쓰기
  async addDocument({ email, nickName }:{ email:string, nickName:string}) {
    const uid = appAuth.currentUser?.uid || '';
    const introduce = '';
    const column:Column[] = [];
    const colRef = collection(appFireStore, 'private');
    this.setIsPending(true);
    this.setSuccess(false);
    this.setError(false);

    try {
      await addDoc(colRef, {
        uid, email, nickName, introduce, column,
      }).then(() => {
        // eslint-disable-next-line no-console
        console.log('Done');
      });

      this.setIsPending(false);
      this.setSuccess(true);
      this.setError(false);
    } catch (err) {
      this.setIsPending(false);
      this.setSuccess(false);
      this.setError(true);
    }
  }
}
