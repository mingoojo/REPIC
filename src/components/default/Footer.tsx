import { useDarkMode } from 'usehooks-ts';
import { Link } from 'react-router-dom';
import ContainerFooter from './StyledFooter';

export default function Footer() {
  const { isDarkMode, toggle } = useDarkMode();
  function handleClick() {
    toggle();
  }
  return (
    <ContainerFooter>
      <div className="footerBox">
        <div className="footerIntro">
          <ul>
            <h1>
              About
            </h1>
            <li>
              <Link to="/">
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
              </Link>
            </li>
            <li>
              <Link to="/">
                Lorem ipsum dolor sit amet.
              </Link>
            </li>
            <li>
              <Link to="/">
                Lorem ipsum dolor sit amet.
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerMid">
          <ul>
            <h1>
              Service
            </h1>
            <li>
              <Link to="/">
                서비스 이용약관
              </Link>
            </li>
            <li>
              <Link to="/">
                개인정보 처리방침
              </Link>
            </li>
            <li>
              <Link to="/">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerEnd">
          <ul>
            <h1>
              Support
            </h1>
            <li>
              Copyright©2023 MingooJo.All rights reserved.
            </li>
            <li>
              <button type="button" onClick={handleClick}>다크모드</button>
            </li>
          </ul>
        </div>
      </div>
    </ContainerFooter>
  );
}
