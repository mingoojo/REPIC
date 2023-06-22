import { styled } from 'styled-components';
import { appAuth } from '../../../firebase/config';
import ModalHeaderLogIn from './ModalHeaderLogIn';
import ModalHeaderLogOut from './ModalHeaderLogOut';
import ModalHeaderDefault from './ModalHeaderDefault';

type ModalSmallProps = {
  toggle : boolean,
  setToggle : (toggle:boolean) =>void
}

const Container = styled.div`
position: absolute;
width: 100%;
height: 100vh;
z-index: 2;
background-color: ${(props) => props.theme.colors.backgroundMain};
left: 0;
top: 0;
padding: 1.5rem 5rem 1.5rem 5rem;

.buttonBar{
  display: flex;
  justify-content: end;
  padding-right: 0.5rem;
  align-items: center;
  button{
    cursor: pointer;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    background:none;
    border: none;
    font-size: 4rem;
    color: ${(props) => props.theme.colors.textMain};
  }
}

.ItemBar{
  ul{
    padding-block: 3rem;
    text-align: center;
  }
}
`;

export default function HeaderModal({ setToggle, toggle }:ModalSmallProps) {
  const CurrentUser = appAuth.currentUser;
  const userId = CurrentUser?.uid || '';

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container className="menuBar">
      <div className="buttonBar">
        <button type="button" onClick={() => { setToggle(!toggle); }}>x</button>
      </div>
      <div className="ItemBar">
        <ul>
          <ModalHeaderDefault OnClick={handleToggle} />
          {
            CurrentUser
              ? <ModalHeaderLogIn OnClick={handleToggle} userId={userId} />
              : <ModalHeaderLogOut OnClick={handleToggle} />
          }
        </ul>
      </div>
    </Container>
  );
}
