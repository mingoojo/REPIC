import { useEffect, useState } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { storeApiService } from '../apiServices/StoreApiService';
import UserDataStore from '../store/UserDataStore';

export default function useFetchStore(transaction:string) {
  const userDataStore = container.resolve(UserDataStore);
  const [, store] = useStore(userDataStore);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  // 글추가이벤트
  function AddDocument() {
    storeApiService.addDocument({
      title, text, transaction,
    });
  }

  // 글삭제이벤트
  function DeleteDocument(id:string) {
    storeApiService.deleteDocument({
      id, transaction,
    });
  }

  useEffect(() => {
    if (store.success) {
      setTitle('');
      setText('');
    }
  }, [store.success]);

  return {
    AddDocument, DeleteDocument, title, setTitle, text, setText,
  };
}
