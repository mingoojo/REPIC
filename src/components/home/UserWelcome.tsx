import styled from 'styled-components';
import { appAuth } from '../../firebase/config';
import getUserInfo from '../../utils/getUserInfo';

const Container = styled.div`
  border: 2px solid #222;
  text-align: center;
`;

export default function UserWelcome() {
  const UserInfo = appAuth.currentUser;
  const { gotUserInfo } = getUserInfo({ uid: String(UserInfo?.uid) });

  if (gotUserInfo === undefined) {
    return null;
  }
  return (
    <Container>
      123
    </Container>
  );
}
