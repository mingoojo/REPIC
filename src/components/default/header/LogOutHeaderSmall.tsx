import { useDarkMode } from 'usehooks-ts';

export default function LogOutHeaderSmall() {
  const { isDarkMode } = useDarkMode();
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
      </li>
      <li className="headerSide">
        <button type="button">햄버거</button>
      </li>
    </>
  );
}
