import React from 'react';
import styled from 'styled-components';
import useUserInfoUpdateStore from '../../hooks/useUserInfoUpdateStore';

const Container = styled.div`
  h1{
    font-size: 1.5rem;
    font-weight: normal;
    margin-block: 2rem;
  }
  input, .introduce{
  background-color: rgba( 255, 255, 255, 0 );
  color: ${(props) => props.theme.colors.textMain};
  border: 1px solid ${(props) => props.theme.colors.textSecond};
  width: 100%;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 3rem .7rem 1.7rem .7rem;
  margin-block: 1rem;
}
.introduce{
  min-height: 100px;
  resize: none;
}
  label{
    position: absolute;
    padding: 2rem 0rem 0rem 1rem;
    color: ${(props) => props.theme.colors.textSecond};
    font-weight: 300;
    font-size: 1.4rem;
    z-index: -1;
  }
`;

export default function UpdateDefault() {
  const [{ UserNickName, UserIntro }, userInfoUpdateStore] = useUserInfoUpdateStore();
  const handleNickName = (e:React.ChangeEvent<HTMLInputElement>) => {
    userInfoUpdateStore.setNickName([e.target.value]);
  };
  const handleIntro = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    userInfoUpdateStore.setIntro([e.target.value]);
  };
  return (
    <Container>
      <div>
        <h1>
          닉네임변경
        </h1>
        <label className="NickLabel" htmlFor="nickName">NickName</label>
        <input type="text" value={UserNickName[0]} id="nickName" onChange={handleNickName} />
      </div>
      <div>
        <h1>
          자기소개 작성
        </h1>
        <label className="IntroLabel" htmlFor="intro">Introduce</label>
        <textarea className="introduce" value={UserIntro[0]} id="intro" onChange={handleIntro} cols={30} rows={10} />
      </div>
    </Container>
  );
}
