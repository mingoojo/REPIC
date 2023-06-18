import { styled } from 'styled-components';

const ContainerUserCard = styled.div`
display: inline-block;
width: 35%;
min-height: 100vh;
border-right: 1px solid ${(props) => props.theme.colors.textMain};
font-weight: 100;
letter-spacing: 1.3px;;
aside{
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
  height: 400px;
  text-align: center;
  padding: 1rem;
  h1{
  font-size: 3rem;
  font-weight: normal;
}
.Thumbnail{
  display: inline-block;
  width: 100px;
  margin-block: 2rem;
  height: 100px;
  border-radius: 5rem;
  background-color: beige;
}
}
.userToggle{
  text-align: center;

  div{
    margin: 1rem 3% 1rem 3%;
    width: 90%;
    height: 50px;
    border-radius: .3rem;
    label{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      line-height: 50px;
      color: ${(props) => props.theme.colors.textMain};
      text-align: center;
      img{
        margin-right: 1rem;
        margin-top: 10px;
        height: 25px;
        display: inline;
      }
      p{
          font-family: 'GmarketSansMedium';
          font-weight: normal;
          font-style: normal;
        }
    }
    input{
      display: none;
    }
    input[type='radio']:checked + label{
      background-color: ${(props) => props.theme.colors.buttonMain};
    }
  }
  label:hover{
    background-color: ${(props) => props.theme.colors.buttonMain};
  }
}
@media (max-width: 720px) {
  display: none ;
}
`;

export default ContainerUserCard;
