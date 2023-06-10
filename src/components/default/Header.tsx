import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { appAuth } from '../../firebase/config';
import useFetchLogOut from '../../hooks/useFetchLogout';

const Container = styled.header`
margin-block: 2rem;
  h2{
    font-size: 3rem;
  }
  ul{
    display: flex;
    margin-block: 1rem;
    li{
      margin-right: 1rem;
    }
  }
`;

export default function Header() {
  const userInfo = appAuth.currentUser;
  const { LogOut } = useFetchLogOut();

  return (
    <Container>
      <h2>Community</h2>
      <nav>
        <ul>
          {
            userInfo ? (
              <>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <button type="button" onClick={LogOut}>Log out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/signup">signup</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </>

            )
          }
        </ul>
      </nav>
    </Container>
  );
}
