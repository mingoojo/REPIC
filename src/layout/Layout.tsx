import { Link, Outlet } from 'react-router-dom';
import useGetUserInfo from '../hooks/useGetUserInfo';
import useLogout from '../hooks/useLogout';
import ContainerDiv from '../style/default/layoutStyle';

export default function Layout() {
  const { logout } = useLogout();
  const userinfo = useGetUserInfo();

  function handleLogout() {
    logout();
  }
  return (
    <ContainerDiv>
      <header>
        <nav>
          <Link to="/">home</Link>
          {
            userinfo ? (
              <>
                <strong>
                  환영합니다
                  {' '}
                  {userinfo.displayName}
                  님!
                </strong>
                <button type="button" onClick={handleLogout}>로그아웃</button>
              </>
            )
              : (
                <>
                  <Link to="/signup">signup</Link>
                  <Link to="/login">login</Link>
                </>
              )
          }

        </nav>
        <h2>두근두근 비밀일기</h2>
      </header>
      <Outlet />
      <footer>footer</footer>
    </ContainerDiv>
  );
}
