import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { container } from 'tsyringe';
import { appAuth } from '../../firebase/config';
import UserStore from '../../store/UserStore';

const Container = styled.header`
margin-block: 2rem;
border-bottom: 1px solid #222;
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
        text-decoration: none;
        font-weight: bold;
        color: #222;
      }
      a:hover{
        text-decoration-line: underline;
      }
      button{
        margin-left: 1.5rem;
      }
    }
  }
  .headerLogo{
    height: 3rem;
  }
`;

export default function Header() {
  const store = container.resolve(UserStore);
  const userInfo = appAuth.currentUser;
  const userId = userInfo?.uid;
  const navigate = useNavigate();
  function handleLogout() {
    navigate('/login');
    store.logout();
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
                  <Link to="/">홈</Link>
                  <Link to="/communities">커뮤니티</Link>
                  <Link to="/projects">프로젝트</Link>
                </li>
                <li>
                  <Link to={`/private/${userId}`}>마이페이지</Link>
                  <button type="button" onClick={handleLogout}>로그아웃</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <img className="headerLogo" src="/images/Logo.png" alt="test" />
                  <Link to="/">홈</Link>
                  <Link to="/communities">커뮤니티</Link>
                  <Link to="/projects">프로젝트</Link>
                </li>
                <li>
                  <Link to="/signup">가입하기</Link>
                  <Link to="/login">로그인</Link>
                </li>
              </>

            )
          }
        </ul>
      </nav>
    </Container>
  );
}
