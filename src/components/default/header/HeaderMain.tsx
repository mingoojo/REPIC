import { Link } from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts';
import { styled } from 'styled-components';
import { appAuth } from '../../../firebase/config';
import LogOutButton from '../../ui/LogOutButton';

const Container = styled.ul`
margin-block: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
li{
  display: flex;
  align-items: center;
  a{
    margin-left: 3rem;
    white-space: nowrap;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textMain};
    align-items: center;
    letter-spacing: -0.5px;
    display: flex;
    img{
      height: 20px;
      margin-right: 1rem;
    }
  }
  a:hover{
    text-decoration-line: underline;
  }
  .headerLogo{
    height: 2rem;
    margin-right: 3rem;
  }
}
`;

export default function HeaderMain() {
  const { isDarkMode } = useDarkMode();
  const CurrentUser = appAuth.currentUser;
  return (
    <Container>
      <li>
        {
          isDarkMode ? (
            <img className="headerLogo" src="/images/logoB_.png" alt="test" />
          ) : (
            <img className="headerLogo" src="/images/logoW__.png" alt="test" />
          )
        }
        <Link to="/">홈</Link>
        <Link to="/communities?page=1">커뮤니티</Link>
        <Link to="/projects">프로젝트</Link>
      </li>
      {
        CurrentUser ? (
          <li className="headerSide">
            <Link to={`/setting/${CurrentUser.uid}`}>
              {
                isDarkMode ? (
                  <img src="/images/icons/setting02.png" alt="seticon" />
                ) : (
                  <img src="/images/icons/setting04.png" alt="seticon" />
                )
              }
              <p>
                정보수정
              </p>
            </Link>
            <Link to={`/mypage/${CurrentUser.uid}`}>마이페이지</Link>
            <LogOutButton />
          </li>
        ) : (
          <li className="headerSide">
            <Link to="/signup">가입하기</Link>
            <Link to="/login">로그인</Link>
          </li>
        )
      }

    </Container>
  );
}
