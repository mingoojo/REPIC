import styled from 'styled-components';
import { appAuth } from '../../firebase/config';
import UserWelcome from './UserWelcome';

const Container = styled.div`
  
`;

export default function HomeView() {
  const UserInfo = appAuth.currentUser;
  if (!UserInfo) {
    return null;
  }
  return (
    <Container>
      <UserWelcome />
    </Container>
  );
}
