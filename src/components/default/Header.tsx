import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { appAuth } from '../../firebase/config';
import useFetchUserStore from '../../hooks/useFetchUserStore';
import useUserStore from '../../hooks/useUserStore';

const Container = styled.header`
margin-block: 2rem;
  ul{
    display: flex;
    justify-content: space-between;
    margin-block: 1rem;
    align-items: center;
    li{
      display: flex;
      align-items: center;
      margin-right: 1rem;
      a{
        margin-left: 1rem;
        display: inline-block;
      }
    }
  }
  .headerLogo{
    height: 3rem;
  }
`;

export default function Header() {
  const { logout } = useFetchUserStore();
  const userInfo = appAuth.currentUser;
  const userId = userInfo?.uid;
  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate('/login');
  }
  return (
    <Container>
      <nav>
        <ul>
          {
            userInfo ? (
              <>
                <li>
                  <img className="headerLogo" src="/images/Logo.png" alt="test" />
                  <Link to="/">Home</Link>
                  <Link to="/communities">Community</Link>
                  <Link to="/projects">Project</Link>
                  <Link to={`/private/${userId}`}>Private</Link>
                </li>
                <li>
                  <button type="button" onClick={handleLogout}>Log out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <img className="headerLogo" src="/images/Logo.png" alt="test" />
                  <Link to="/">Home</Link>
                  <Link to="/communities">Community</Link>
                  <Link to="/projects">Project</Link>
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
