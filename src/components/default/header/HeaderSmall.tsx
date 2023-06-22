import { styled } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

type LogInHeaderSmallProps = {
  toggle : boolean,
  setToggle : (toggle:boolean) => void
}

const Container = styled.ul`
height: 40px;
margin-block: 1rem;
display: flex;
justify-content: space-between;
align-items: center;

  .headerLogo{
    height: 2rem;
    margin-right: 3rem;
  }
  .headerSide{
    height: 22px;
    width: 30px;
    display: flex;
    align-items: center;
    label{
      color: ${(props) => props.theme.colors.textMain};
      display: block;
      font-size: 3rem;
      cursor: pointer;
      -webkit-user-select:none;
      -moz-user-select:none;
      -ms-user-select:none;
      user-select:none;
    }
    input{
      display: none;
    }
  }
`;

export default function HeaderSmall({ toggle, setToggle }:LogInHeaderSmallProps) {
  const { isDarkMode } = useDarkMode();
  const change = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <li>
        {
          isDarkMode ? (
            <img className="headerLogo" src="/images/logoB.png" alt="Logo" />
          ) : (
            <img className="headerLogo" src="/images/logoW.png" alt="Logo" />
          )
        }
      </li>
      <li className="headerSide" onChange={change}>
        <div>
          <label>
            ☰
            <input type="checkbox" checked={toggle} onChange={change} />
          </label>
        </div>
      </li>
    </Container>
  );
}
