import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appAuth } from '../../firebase/config';
import useLogout from '../../hooks/useLogout';

export default function Header() {
  const { logout } = useLogout();
  const { currentUser } = appAuth;
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
  return (
    <header>
      <nav>
        {
          currentUser ? (
            <>
              <Link to="/">home</Link>
              <button type="button" onClick={logout}>Log out</button>
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
      <h2>두근두근 비밀일기</h2>
    </header>
  );
}
