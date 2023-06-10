import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { appAuth } from '../../firebase/config';
import useFetchLogOut from '../../hooks/useFetchLogout';
import useFetchStorage from '../../hooks/useFetchStorage';

const Container = styled.header`
margin-block: 2rem;
  h2{
    font-size: 3rem;
  }
  ul{
    display: flex;
    justify-content: space-between;
    margin-block: 1rem;
    li{
      margin-right: 1rem;
      a{
        margin-left: 1rem;
      }
    }
  }
`;

const Image = styled.div`
  background-image: url('../../../static/images/Logo.png');
`;

export default function Header() {
  const userInfo = appAuth.currentUser;
  const navigate = useNavigate();
  const { LogOut } = useFetchLogOut();
  // const { downLoadImage } = useFetchStorage();
  function handleLogout() {
    LogOut();
    navigate('/login');
  }

  return (
    <Container>
      <Image>
        image
      </Image>
      <nav>
        <ul>
          {
            userInfo ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <button type="button" onClick={handleLogout}>Log out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <Link to="/signup">signup</Link>
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
