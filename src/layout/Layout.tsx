import { Link, Outlet } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import useStore from '../hooks/useStore';
import ContainerDiv from '../style/default/layoutStyle';

export default function Layout() {
  const { logout } = useLogout();
  const store = useStore();
  function handleLogout() {
    logout();
    console.log(store.state);
  }
  return (
    <ContainerDiv>
      <header>
        <nav>
          <Link to="/">home</Link>
          <Link to="/signup">signup</Link>
          <Link to="/login">login</Link>
          <button type="button" onClick={handleLogout}>로그아웃</button>
        </nav>
        <h2>두근두근 비밀일기</h2>
      </header>
      <Outlet />
      <footer>footer</footer>
    </ContainerDiv>
  );
}
