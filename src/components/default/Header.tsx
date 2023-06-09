import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { container } from 'tsyringe';
import { appAuth } from '../../firebase/config';
import useFetchLogOut from '../../hooks/useFetchLogout';
import UserStore from '../../store/UserStore';

function useForceUpdate() {
  const [, setState] = useState({});
  const forceUpdate = useCallback(() => {
    setState({});
  }, []);
  return {
    forceUpdate,
  };
}

export default function Header() {
  const userInfo = appAuth.currentUser;
  const [state1, setState1] = useState('hihi');
  const Store = container.resolve(UserStore);
  const { LogOut } = useFetchLogOut();
  const { forceUpdate } = useForceUpdate();
  useEffect(() => {
    setTimeout(() => {
      forceUpdate();
    }, 3000);
  }, [userInfo]);

  const target = document;

  // 감시자 인스턴스 만들기
  const observer = new MutationObserver((mutations) => {
    // 노드가 변경 됐을 때의 작업
    alert('DOM 변경 감지');
  });

  // 감시자의 설정
  const option = {
    attributes: true,
    childList: true,
    characterData: true,
  };

  // 대상 노드에 감시자 전달
  observer.observe(target, option);

  return (
    <header>
      <nav>
        {
          userInfo ? (
            <>
              <Link to="/">home</Link>
              <button type="button" onClick={LogOut}>Log out</button>
            </>
          ) : (
            <>
              <Link to="/">home</Link>
              <Link to="/signup">signup</Link>
              <Link to="/login">login</Link>
            </>

          )
        }
      </nav>
      <h2>Title</h2>
      <button type="button" className="buttonon" onClick={() => { setState1('byby'); }}>{state1}</button>
    </header>
  );
}
