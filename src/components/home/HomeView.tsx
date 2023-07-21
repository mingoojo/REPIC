import styled from 'styled-components';
import { appAuth } from '../../firebase/config';
import UserWelcome from './UserWelcome';
import HomeBody from './HomeBody';

const Container = styled.div`
  
`;

export default function HomeView() {
  const UserInfo = appAuth.currentUser;
  return (
    <Container>
      {
        UserInfo ? (<UserWelcome />) : null
      }
      <HomeBody />
    </Container>
  );
}
