import { useState } from 'react';
import useFetchPrivateStore from '../../hooks/useFetchPrivateStore';
import { PrivateData } from '../../type/types';
import ArticleUserInt from './privateStyle/UserIntroduceStyle';

type UserIntroduceProps = {
  myPrivateData: PrivateData[]
}

export default function UserIntroduce({ myPrivateData }:UserIntroduceProps) {
  const [MyPrivateData] = myPrivateData;
  const [nickName, setNickName] = useState(
    MyPrivateData.nickName[MyPrivateData.nickName.length - 1],
  );
  const [intro, setIntro] = useState(MyPrivateData.introduce[MyPrivateData.introduce.length - 1]);

  const { fetchUpdatePrivateUser } = useFetchPrivateStore();
  const handleClick = () => {
    fetchUpdatePrivateUser({ nickName, intro, docId: MyPrivateData.id });
    alert('변경완료');
  };
  return (
    <ArticleUserInt>
      <div>
        <h2>
          사진변경
        </h2>
        <input type="file" id="photo" />
      </div>
      <div>
        <h2>
          닉네임변경
        </h2>
        <label htmlFor="nickName">NickName</label>
        <input type="text" value={nickName} onChange={(e) => { setNickName(e.target.value); }} id="nickName" />
      </div>
      <div>
        <h2>
          자기소개
        </h2>
        <label htmlFor="intro">Introduce</label>
        <textarea className="introduce" value={intro} onChange={(e) => { setIntro(e.target.value); }} id="intro" cols={30} rows={10} />
      </div>
      <div className="buttonBox">
        <button type="button" onClick={handleClick}>변경하기</button>
      </div>
    </ArticleUserInt>
  );
}
