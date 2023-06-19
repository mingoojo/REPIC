/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';
import useFetchPrivateStore from '../../hooks/useFetchPrivateStore';
import { PrivateData } from '../../type/types';
import ArticleUserInt from './privateStyle/UserIntroduceStyle';
import useFetchThumbStorage from '../../hooks/useFetchThumbStorage';
import PictureSet from './PictureSet';
import Stacks from './Stacks';
import DefaultInfoSet from './DefaultInfoSet';

type UserIntroduceProps = {
  myPrivateData: PrivateData[]
}

export default function UserIntroduce({ myPrivateData }:UserIntroduceProps) {
  const { ThumbsDownload } = useFetchThumbStorage();
  const [myStack, setMyStack] = useState<string[]>(myPrivateData[0].stacks);
  const [MyPrivateData] = myPrivateData;
  useEffectOnce(() => {
    ThumbsDownload({ userInfo: MyPrivateData.uid });
  });

  return (
    <ArticleUserInt>
      <PictureSet MyPrivateData={MyPrivateData} />
      <Stacks myStack={myStack} setMyStack={setMyStack} />
      <DefaultInfoSet MyPrivateData={MyPrivateData} myStack={myStack} />
    </ArticleUserInt>
  );
}
