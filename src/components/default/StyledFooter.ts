import { styled } from 'styled-components';

const ContainerFooter = styled.div`
padding-block: 3rem;
width: 100%;
background-color: ${(props) => props.theme.colors.backgroundMain};
color : ${(props) => props.theme.colors.textMain};
border-top: 1px solid ${(props) => props.theme.colors.textMain};;
div{
  max-width: 820px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  div{
    margin: 0;
    li{
      margin-block: 0.8rem;
      font-weight: 100;
      font-size: 1.2rem;
    }
    h1{
      margin-bottom: 2rem;
      font-size: 2rem;
    }
  }
  .footerIntro{
    width: 40%;
  }
  .footerMid{
    width: 25%;
  }
  .footerEnd{
    width: 25%;
  }
}
@media (max-width: 720px){
  .footerBox{
    display: block;
    padding: 3rem;
    .footerIntro{
      width: 100%;
      margin-bottom: 3rem;
    }
    .footerMid{
      vertical-align: top;
      display: inline-block;
      width: 45%;
    }
    .footerEnd{
      vertical-align: top;
      display: inline-block;
      width: 45%;
    }
  }
}
`;

export default ContainerFooter;
