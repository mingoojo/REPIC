import { styled } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

const Container = styled.div`
text-align: center;
.MainLogo{
  width: 100px;
  margin-block: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
}
.introComent{
  font-size: 2rem;
  font-weight: bold;
  .title{
    display: inline;
    color: ${(props) => props.theme.colors.primary}
  }
  .titlePara{
    display: inline;
    color: ${(props) => props.theme.colors.textMain}
  }
}
.semiComent{
  margin: 1rem;
  color: ${(props) => props.theme.colors.textSecond}
}
`;

export default function SignUpContent() {
  const { isDarkMode } = useDarkMode();
  return (
    <Container>
      {
        isDarkMode ? (
          <img className="MainLogo" src="/images/logoB.png" alt="test" />
        ) : (
          <img className="MainLogo" src="/images/logoW.png" alt="test" />

        )
      }
      <div className="introComent">
        <p className="title">리픽</p>
        <p className="titlePara">에 오신 걸 환영합니다.</p>
      </div>
      <p className="semiComent">REPIC은 개발자를 위한 플랫폼입니다.</p>
    </Container>
  );
}
