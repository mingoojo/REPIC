import { Link, useNavigate } from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts';
import useUserStore from '../../../hooks/useUserStore';

export default function LogInHeader({ userId }: {userId:string|undefined}) {
  const { isDarkMode } = useDarkMode();
  const [, store] = useUserStore();
  const navigate = useNavigate();
  function handleLogout() {
    navigate('/login');
    store.logout();
  }
  return (
    <>
      <li>
        {
          isDarkMode ? (
            <img className="headerLogo" src="/images/logoW.png" alt="test" />
          ) : (
            <img className="headerLogo" src="/images/logoB.png" alt="test" />
          )
        }
        <Link to="/">홈</Link>
        <Link to="/communities">커뮤니티</Link>
        <Link to="/projects">프로젝트</Link>
      </li>
      <li className="headerSide">
        <Link to={`/private/${userId}`}>마이페이지</Link>
        <button className="logout" type="button" onClick={handleLogout}>로그아웃</button>
      </li>
    </>
  );
}
