import { Link } from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts';

export default function LogOutHeader() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <li>
        {
          isDarkMode ? (
            <img className="headerLogo" src="/images/logoB_.png" alt="test" />
          ) : (
            <img className="headerLogo" src="/images/logoW_.png" alt="test" />
          )
        }
        <Link to="/">홈</Link>
        <Link to="/communities">커뮤니티</Link>
        <Link to="/projects">프로젝트</Link>
      </li>
      <li className="headerSide">
        <Link to="/signup">가입하기</Link>
        <Link to="/login">로그인</Link>
      </li>
    </>
  );
}
