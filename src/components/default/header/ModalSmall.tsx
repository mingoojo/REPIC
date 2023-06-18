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
          <Link to="/" onClick={() => { setToggle(!toggle); }}>
            <li>
              홈
            </li>
          </Link>
          <Link to="/communities?page=1" onClick={() => { setToggle(!toggle); }}>
            <li>
              커뮤니티
            </li>
          </Link>
          <Link to="/projects" onClick={() => { setToggle(!toggle); }}>
            <li>
              프로젝트
            </li>
          </Link>
          {
            userInfo ? (
              <>
                <Link to={`/private/${userId}`} onClick={() => { setToggle(!toggle); }}>
                  <li className="headerSide">
                    마이페이지
                  </li>
                </Link>
                <div>
                  <button className="logout" type="button" onClick={handleLogout}>로그아웃</button>
                </div>
              </>

            ) : (
              <>
                <Link to="/signup" onClick={() => { setToggle(!toggle); }}>
                  <li>
                    가입하기
                  </li>
                </Link>
                <Link to="/login" onClick={() => { setToggle(!toggle); }}>
                  <li>
                    로그인
                  </li>
                </Link>
              </>
            )
          }
        </ul>
      </div>
    </div>
  );
}
