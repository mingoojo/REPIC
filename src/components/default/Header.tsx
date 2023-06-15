import { useEffect, useState } from 'react';
import { appAuth } from '../../firebase/config';
import LogOutHeader from './header/LogOutHeader';
import LogInHeader from './header/LogInHeader';
import useWindowSize from '../../hooks/useWindowSize';
import HeaderSmall from './header/HeaderSmall';
import ModalSmall from './header/ModalSmall';
import ContainerHeader from './StyledHeader';

export default function Header() {
  const { windowSize, setResize, delResize } = useWindowSize();
  const [toggle, setToggle] = useState(false);
  const userInfo = appAuth.currentUser;
  const userId = userInfo?.uid;

  useEffect(() => {
    setResize();
    return () => {
      delResize();
    };
  }, []);

  useEffect(() => {
    if (windowSize > 720) {
      setToggle(false);
    }
  }, [windowSize]);

  return (
    <ContainerHeader>
      <nav>
        {
          windowSize > 720 ? (
            <ul>
              {
                userInfo ? <LogInHeader userId={userId} /> : <LogOutHeader />
              }
            </ul>
          ) : (
            <ul>
              <HeaderSmall toggle={toggle} setToggle={setToggle} />
            </ul>
          )
        }
      </nav>
      {toggle && (<ModalSmall setToggle={setToggle} toggle={toggle} />)}
    </ContainerHeader>
  );
}
