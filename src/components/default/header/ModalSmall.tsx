import { Link, useNavigate } from 'react-router-dom';
import { appAuth } from '../../../firebase/config';
import useUserStore from '../../../hooks/useUserStore';

type ModalSmallProps = {
  toggle : boolean,
  setToggle : (toggle:boolean) =>void
}

export default function ModalSmall({ setToggle, toggle }:ModalSmallProps) {
  const userInfo = appAuth.currentUser;
  const userId = userInfo?.uid;
  const [, store] = useUserStore();
  const navigate = useNavigate();
  function handleLogout() {
    navigate('/login');
    store.logout();
  }
  return (
    <div className="menuBar">
      <div className="buttonBar">
        <button type="button" onClick={() => { setToggle(!toggle); }}>x</button>
      </div>
      <div className="ItemBar">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/communities">커뮤니티</Link>
          </li>
          <li>
            <Link to="/projects">프로젝트</Link>
          </li>
          {
            userInfo ? (
              <>
                <li className="headerSide">
                  <Link to={`/private/${userId}`}>마이페이지</Link>
                </li>
                <li>
                  <button className="logout" type="button" onClick={handleLogout}>로그아웃</button>
                </li>
              </>

            ) : (
              <>
                <li>
                  <Link to="/signup">가입하기</Link>
                </li>
                <li>
                  <Link to="/login">로그인</Link>
                </li>
              </>
            )
          }
        </ul>
      </div>
    </div>
  );
}
