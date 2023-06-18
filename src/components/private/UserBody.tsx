import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PrivateData } from '../../type/types';
import UserCard from './UserCard';
import UserIntroduce from './UserIntroduce';
import { appAuth } from '../../firebase/config';
import UserActivity from './UserActivity';

const Container = styled.div`
width: 100%;
min-height: 90vh;
@media (max-width: 720px) {
  margin-bottom: 5rem;
}
`;

type UserBodyProps = {
  myPrivateData : PrivateData[]
}

export default function UserBody({ myPrivateData }:UserBodyProps) {
  const navigate = useNavigate();
  const [radioToggle, setRadioToggle] = useState('info');
  const User = appAuth.currentUser?.uid || '';

  // 개인만 확인 할 수 있게 하는 방식
  useEffect(() => {
    if (User !== myPrivateData[0].uid) {
      // eslint-disable-next-line no-alert
      alert('잘못된 접근입니다.');
      navigate('/');
    }
  }, []);
  return (
    <Container>
      <UserCard
        myPrivateData={myPrivateData}
        radioToggle={radioToggle}
        setRadioToggle={setRadioToggle}
      />
      {
        radioToggle === 'info' && <UserIntroduce myPrivateData={myPrivateData} />
      }
      {
        radioToggle === 'write' && <UserActivity />
      }
    </Container>
  );
}
