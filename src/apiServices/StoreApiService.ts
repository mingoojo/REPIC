import {
  addDoc, collection, deleteDoc, doc, onSnapshot,
} from 'firebase/firestore';
import { container } from 'tsyringe';
import { appAuth, appFireStore, timeStamp } from '../firebase/config';
import CollectionDocumentStore from '../store/CollectionDocumentStore';
import UserDataStore from '../store/UserDataStore';
import DocumentProps from '../type/types';

type addDocumentProps = {
  transaction: string
  title: string
  text: string
}

type unsubscribeCollectionProps = {
  transaction: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setError : (error : any) => void
}

type deleteDocumentProps = {
  id:string,
  transaction: string
}

export default class StoreApiService {
  userDataStore = container.resolve(UserDataStore);

  collectionDocumentStore = container.resolve(CollectionDocumentStore);

  // 글작성
  async addDocument({
    transaction, title, text,
  }:addDocumentProps) {
    const uid = appAuth.currentUser?.uid || '';
    const colRef = collection(appFireStore, transaction);
    this.userDataStore.IsPendingUpdate(true);
    this.userDataStore.DocumentUpdate(null);
    this.userDataStore.SuccessUpdate(false);
    this.userDataStore.ErrorUpdate(null);

    try {
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, {
        uid, title, text, createdTime,
      });
      this.userDataStore.IsPendingUpdate(false);
      this.userDataStore.DocumentUpdate(docRef);
      this.userDataStore.SuccessUpdate(true);
      this.userDataStore.ErrorUpdate(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      this.userDataStore.IsPendingUpdate(false);
      this.userDataStore.DocumentUpdate(null);
      this.userDataStore.SuccessUpdate(false);
      this.userDataStore.ErrorUpdate(err.message);
    }
  }

  deleteDocument = async ({ id, transaction }:deleteDocumentProps) => {
    const colRef = collection(appFireStore, transaction);
    this.userDataStore.IsPendingUpdate(true);
    this.userDataStore.DocumentUpdate(null);
    this.userDataStore.SuccessUpdate(false);
    this.userDataStore.ErrorUpdate(null);

    try {
      const docRef = await deleteDoc(doc(colRef, id));
      this.userDataStore.IsPendingUpdate(false);
      this.userDataStore.DocumentUpdate(docRef);
      this.userDataStore.SuccessUpdate(true);
      this.userDataStore.ErrorUpdate(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      this.userDataStore.IsPendingUpdate(false);
      this.userDataStore.DocumentUpdate(null);
      this.userDataStore.SuccessUpdate(false);
      this.userDataStore.ErrorUpdate(err.message);
    }
  };

  // 글불러오기
  unsubscribeCollection({ transaction, setError }: unsubscribeCollectionProps) {
    onSnapshot(
      collection(appFireStore, transaction),
      (snapshot) => {
        const results:DocumentProps[] = [];
        snapshot.docs.forEach((docu) => {
          const result = { ...docu.data(), id: docu.id } as DocumentProps;
          results.push(result);
        });
        this.collectionDocumentStore.CollectionDocumentUpdate(results);
        setError(null);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err:any) => setError(err.message),
    );
  }
}

export const storeApiService = new StoreApiService();
