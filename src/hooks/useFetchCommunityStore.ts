import { useState } from 'react';
import { container } from 'tsyringe';
import CommunityStore from '../store/CommunityStore';

export default function useFetchCommunityStore() {
  const store = container.resolve(CommunityStore);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  // 글불러오기
  const fetchGet = store.fetchGetCommunity;

  // 글작성하기
  const fetchAddDoc = () => {
    store.addDocument({ title, text });
  };
  return {
    fetchGet, title, text, setTitle, setText, fetchAddDoc,
  };
}
