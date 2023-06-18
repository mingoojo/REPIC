import { useState } from 'react';
import { container } from 'tsyringe';
import CommunityStore from '../store/CommunityStore';
import { Comment, fetchUpdateCommunityProp } from '../type/types';

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

  // 글업데이트: 좋아요
  const fetchUpdateCommunityLikes = ({
    tranaction, docId, updateKey, updateValue,
  }:fetchUpdateCommunityProp<string>) => {
    store.fetchUpdateCommunityLikes({
      tranaction, docId, updateKey, updateValue,
    });
  };

  // 글업데이트: 댓글
  const fetchUpdateCommunityComments = ({
    tranaction, docId, updateKey, updateValue,
  }:fetchUpdateCommunityProp<Comment>) => {
    store.fetchUpdateCommunityCommnets({
      tranaction, docId, updateKey, updateValue,
    });
  };

  // 글업데이트: 방문자수
  const fetchUpdateCommunityViews = ({
    tranaction, docId, updateKey, updateValue,
  }:fetchUpdateCommunityProp<number>) => {
    store.fetchUpdateCommunityViews({
      tranaction, docId, updateKey, updateValue,
    });
  };

  return {
    fetchGet,
    title,
    text,
    setTitle,
    setText,
    fetchAddDoc,
    fetchUpdateCommunityLikes,
    fetchUpdateCommunityComments,
    fetchUpdateCommunityViews,
  };
}
