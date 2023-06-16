import { styled } from 'styled-components';

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
      letter-spacing: -0.5px;
    }
  }
}
  .menuBar{
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 10;
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
          a{
            text-decoration: none;
            color: ${(props) => props.theme.colors.textMain}
          }
        }
      }
    }
  }
  .logout:hover{
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.backgroundMain};
  }
`;
export default ContainerHeader;
