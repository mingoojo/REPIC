import { useDarkMode } from 'usehooks-ts';
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
              Footer
            </h1>
            <li>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
            </li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className="footerMid">
          <ul>
            <h1>
              Footer
            </h1>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
        <div className="footerEnd">
          <ul>
            <h1>
              Footer
            </h1>
            <li>
              copyright@
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
