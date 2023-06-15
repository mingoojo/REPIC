import { useState } from 'react';
import { container } from 'tsyringe';
import { timeStamp } from '../firebase/config';
import PrivateStore from '../store/PrivateStore';
import { Column } from '../type/types';

export default function useFetchPrivateStore() {
  const store = container.resolve(PrivateStore);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  // 글불러오기
  const fetchGet = store.fetchGetPrivate;

  // 작성된 글 업데이트
  const fetchUpdatePrivateColumn = ({ docId }:{docId:string}) => {
    const createdTime = timeStamp.fromDate(new Date());
    const updateValue = {
      title,
      text,
      createdTime,
    };
    store.fetchUpdatePrivateColumn({
      tranaction: 'private', updateKey: 'column', docId, updateValue,
    });
  };

  return {
    fetchGet, title, setTitle, text, setText, fetchUpdatePrivateColumn,
  };
}
