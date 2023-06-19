/* eslint-disable no-alert */
import { useState } from 'react';
import { PrivateData } from '../../type/types';
import useFetchPrivateStore from '../../hooks/useFetchPrivateStore';

type DefaultInfoSetProps = {
  MyPrivateData:PrivateData
  myStack : string[]
}

export default function DefaultInfoSet({ MyPrivateData, myStack }:DefaultInfoSetProps) {
  const [nickName, setNickName] = useState(
    MyPrivateData.nickName[MyPrivateData.nickName.length - 1],
  );
  const [intro, setIntro] = useState(MyPrivateData.introduce[MyPrivateData.introduce.length - 1]);
  const { fetchUpdatePrivateUser } = useFetchPrivateStore();
  const handleClick = () => {
    fetchUpdatePrivateUser({
      nickName, intro, docId: MyPrivateData.id, myStack, MyPrivateData,
    });
    alert('변경완료');
  };
  return (
    <>
      <div>
        <h2>
          닉네임변경
        </h2>
        <label className="NickLabel" htmlFor="nickName">NickName</label>
        <input type="text" value={nickName} onChange={(e) => { setNickName(e.target.value); }} id="nickName" />
      </div>
      <div>
        <h2>
          자기소개
        </h2>
        <label className="IntroLabel" htmlFor="intro">Introduce</label>
        <textarea className="introduce" value={intro} onChange={(e) => { setIntro(e.target.value); }} id="intro" cols={30} rows={10} />
      </div>
      <div className="buttonBox">
        <button type="button" onClick={handleClick}>변경하기</button>
      </div>
    </>
  );
}
