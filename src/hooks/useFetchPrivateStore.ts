import { useState } from 'react';
import { container } from 'tsyringe';
import { timeStamp } from '../firebase/config';
import PrivateStore from '../store/PrivateStore';
import { PrivateData } from '../type/types';

export default function useFetchPrivateStore() {
  const store = container.resolve(PrivateStore);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  // 글불러오기
  const { fetchGetPrivate } = store;

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

  // 작성된 글 업데이트
  const fetchUpdatePrivateUser = ({
    docId, nickName, intro, myStack, MyPrivateData,
  }:{
    docId:string, nickName:string, intro:string, myStack: string[], MyPrivateData:PrivateData}) => {
    MyPrivateData.nickName.forEach((nickNames) => {
      store.fetchDelPrivateUser({
        tranaction: 'private', docId, updateKey: 'nickName', updateValue: nickNames,
      });
    });
    MyPrivateData.stacks.forEach((stack) => {
      store.fetchDelPrivateUser({
        tranaction: 'private', docId, updateKey: 'stacks', updateValue: stack,
      });
    });
    MyPrivateData.introduce.forEach((int) => {
      store.fetchDelPrivateUser({
        tranaction: 'private', docId, updateKey: 'introduce', updateValue: int,
      });
    });
    store.fetchUpdatePrivateUser({
      tranaction: 'private', updateKey: 'nickName', docId, updateValue: nickName,
    });
    store.fetchUpdatePrivateUser({
      tranaction: 'private', updateKey: 'introduce', docId, updateValue: intro,
    });
    myStack.forEach((stacks) => {
      store.fetchUpdatePrivateUser({
        tranaction: 'private', updateKey: 'stacks', docId, updateValue: stacks,
      });
    });
  };

  return {
    fetchGetPrivate,
    title,
    setTitle,
    text,
    setText,
    fetchUpdatePrivateColumn,
    fetchUpdatePrivateUser,
  };
}
