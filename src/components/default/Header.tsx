import { styled } from 'styled-components';
import useWidthStore from '../../hooks/useWidthStore';
import LogInHeader from './header/LogInHeader';

const ContainerHeader = styled.header`
border-bottom: 1px solid ${(props) => props.theme.colors.textMain};;
background-color: ${(props) => props.theme.colors.backgroundMain};
padding: 1.5rem 5rem 1.5rem 5rem;
font-family: 'Noto Sans CJK KR';
font-weight: bold;
letter-spacing :3px;
position: fixed;
top: 0;
left: 0;
right: 0;
font-size: 1.4rem;
nav{
  ul{
    display: flex;
    justify-content: space-between;
    margin-block: 1rem;
    align-items: center;
    li{
      display: flex;
      align-items: center;
      margin-right: 1rem;
      a{
        margin-left: 3rem;
        display: inline-block;
        white-space: nowrap;
        text-decoration: none;
        color: ${(props) => props.theme.colors.textMain};
      }
      a:hover{
        text-decoration-line: underline;
      }
      button{
        cursor: pointer;
        margin-left: 1.5rem;
        padding: 0.5rem;
        color: ${(props) => props.theme.colors.textMain};
        background-color: ${(props) => props.theme.colors.backgroundMain};
        border: 1px solid ${(props) => props.theme.colors.textMain}
      }
    }
  }
  .headerLogo{
    height: 2rem;
    margin-right: 3rem;
  }
  .headerSide{
    font-family: 'Noto Sans CJK KR';
    font-weight: normal;
    a{
      align-items: center;
      letter-spacing: -0.5px;
      display: flex;
      img{
        height: 20px;
        margin-right: 1rem;
      }
    }
  }
}
  .menuBar{
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
        li{
          padding-block: 2rem;
        }
        a{
            text-decoration: none;
            color: ${(props) => props.theme.colors.textMain};

          }
        div{
          padding-block: 2rem;
        }
        li:hover{
          background-color: ${(props) => props.theme.colors.primary};
          color:white;
        }
      }
    }
  }
  .logout{
    padding: 1rem;
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.backgroundMain};
    border: 1px solid ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.textMain};
    border-radius: .4rem;
    white-space: nowrap;
  }
  .logout:hover{
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.backgroundMain};
  }
`;

export default function Header() {
  const [{ width }] = useWidthStore();

  return (
    <ContainerHeader>
      <nav>
        <ul>
          <LogInHeader />
        </ul>
        {/* {
          width > 720 ? (
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
        } */}
      </nav>
      {/* {toggle && (<ModalSmall setToggle={setToggle} toggle={toggle} />)} */}
    </ContainerHeader>
  );
}
