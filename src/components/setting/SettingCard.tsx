import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import useUserInfoUpdateStore from '../../hooks/useUserInfoUpdateStore';
import { UserData } from '../../type/types';
import UpdateDefault from './UpdateDefault';
import UpdateImg from './UpdateImg';
import UpdateStacks from './UpdateStacks';
import UpdateSummit from './UpdateSummit';

type SettingCardProps = {
  userInfo : UserData
}

const Container = styled.div`
  width: 62%;
  padding: 0rem 1rem 2rem 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export default function SettingCard({ userInfo }:SettingCardProps) {
  const [, userInfoUpdateStore] = useUserInfoUpdateStore();
  const [file, setFile] = useState({} as File);

  useEffect(() => {
    userInfoUpdateStore.Initialization({
      UserIntro: userInfo.introduce,
      UserURL: userInfo.thumbnailURL,
      UserNickName: userInfo.nickName,
      UserStacks: userInfo.stacks,
    });
  }, [userInfo]);
  return (
    <Container>
      <UpdateImg setFile={setFile} />
      <UpdateStacks />
      <UpdateDefault />
      <UpdateSummit file={file} userInfo={userInfo} />
    </Container>
  );
}
