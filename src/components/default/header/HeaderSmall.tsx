import { styled } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

type LogInHeaderSmallProps = {
  toggle : boolean,
  setToggle : (toggle:boolean) => void
}

const CheckBox = styled.li`
/* border: 2px solid white; */
height: 22px;
width: 30px;
label{
  color: ${(props) => props.theme.colors.textMain};
  display: block;
  font-size: 4rem;
  cursor: pointer;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
input{
  display: none;
}
`;

export default function HeaderSmall({ toggle, setToggle }:LogInHeaderSmallProps) {
  const { isDarkMode } = useDarkMode();
  const change = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <li>
        {
          isDarkMode ? (
            <img className="headerLogo" src="/images/logoB.png" alt="Logo" />
          ) : (
            <img className="headerLogo" src="/images/logoW.png" alt="Logo" />
          )
        }
      </li>
      <CheckBox className="headerSide" onChange={change}>
        <div>
          <label>
            ☰
            <input type="checkbox" checked={toggle} onChange={change} />
          </label>
        </div>
      </CheckBox>
    </>
  );
}
