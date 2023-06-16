import { styled } from 'styled-components';

const ArticleUserInt = styled.article`
width: 62%;
float: right;
padding-block: 1rem;
h2{
  font-size: 1.5rem;
  font-weight: normal;
  margin-block: 2rem;
}

input, .introduce{
  background-color: rgba( 255, 255, 255, 0 );
  color: ${(props) => props.theme.colors.textMain};
  border: 1px solid ${(props) => props.theme.colors.textSecond};
  width: 100%;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 3rem .7rem 1.7rem .7rem;
  margin-block: 1rem;
}
.introduce{
  min-height: 100px;
  resize: none;
}
label{
  position: absolute;
  padding: 2rem 0rem 0rem 1rem;
  color: ${(props) => props.theme.colors.textSecond};
  font-weight: 300;
  font-size: 1.4rem;
}
.buttonField{
  text-align: center;
}
.column{
  border: 1px solid #222;
  border-radius: 1rem;
  padding: 1rem;
  margin-block: 1rem;
  min-height: 100px;
}
div[class='buttonBox']{
  text-align: center;
  margin-top: 2rem;
  button{
    width: 95%;
    height: 40px;
    border: none;
    border-radius: 1rem;
    box-shadow: 1px 1px 3px ${(props) => props.theme.colors.primaryDeep};;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
  button:active{
    background-color: ${(props) => props.theme.colors.primaryDeep};
  }
}
@media (max-width: 720px) {
  width: 100%;
}
`;

export default ArticleUserInt;
