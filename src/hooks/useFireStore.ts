import { addDoc, collection } from 'firebase/firestore';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { appFireStore, timeStamp } from '../firebase/config';
import CollectionStore from '../store/CollectionStore';

// 우리가 받을 응답을 저장할 객체입니다. 객체이기 때문에 리듀서로 관리하겠습니다.
// 그리고 이전까지는 상태를 관리할 때 error나 isPending을 위한 useState을 따로 작성해왔지만 이번에는 useReducer로 한번에 관리해보겠습니다.

// document : 파이어스토어에 document의 생성을 요청하면 우리가 생성한 document를 반환합니다.
// isPending: 통신중인지 아닌지 상태
// success : 요청에 대한 응답의 성공 유무
// const initState = {
//   document: null,
//   isPending: false,
//   error: null,
//   success: false,
// };

// 우리가 데이터를 저장할 컬렉션을 인자로 합니다.
export default function useFirestore(transaction:string) {
  const collectionStore = container.resolve(CollectionStore);
  const [, store] = useStore(collectionStore);
  // colRef : 우리가 만들 컬랙션의 참조입니다. 우리가 따로 컬렉션을 만들지는 않았지만,
  // 원하는 컬렉션의 참조를 요구하기만 해도 파이어스토어는 자동으로 해당 컬렉션을 생성해줍니다.
  const colRef = collection(appFireStore, transaction);

  // 컬렉션에 문서를 추가합니다.
  type addDocumentProps = {
    uid : string,
    title : string,
    text : string
  }
  const addDocument = async ({ uid, title, text }:addDocumentProps) => {
    // dispatch(isPending(''));
    store.IsPendingUpdate(true);
    store.DocumentUpdate(null);
    store.SuccessUpdate(false);
    store.ErrorUpdate(null);

    try {
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, {
        uid, title, text, createdTime,
      });
      store.IsPendingUpdate(false);
      store.DocumentUpdate(docRef);
      store.SuccessUpdate(true);
      store.ErrorUpdate(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      store.IsPendingUpdate(false);
      store.DocumentUpdate(null);
      store.SuccessUpdate(false);
      store.ErrorUpdate(err.message);
    }
  };

  return { addDocument };
}
