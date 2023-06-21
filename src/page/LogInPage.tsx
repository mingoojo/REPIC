import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

const Container = styled.div`
padding: 80px 0px 130px 0px;
margin-bottom: 80px;
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
.loginBox{
  margin-top: 3rem;
  text-align: center;
  p{
    color: ${(props) => props.theme.colors.textMain}
  }
}
form{
  margin: auto;
  margin-block: 2rem;
  max-width: 300px;
  div{
    margin-block: 1rem;
  }
  label{
    text-align: left;
    p{
      margin-bottom: 1rem;
    }
    input{
      border-radius: 1rem;
      border: none;
      background-color: ${(props) => props.theme.colors.buttonMain};
      height: 40px;
      width: 300px;
      padding: 1rem;
      color: ${(props) => props.theme.colors.textMain};
    }
  }
  button[type='submit']{
    margin-top: 1rem;
    font-family: 'GmarketSansMedium';
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 2px;
    width: 300px;
    height: 40px;
    border: none;
  }
  button[type='submit']:active{
    background-color: ${(props) => props.theme.colors.primaryDeep};
  }
  p{
    margin-top: 2rem;
    a{
      color: ${(props) => props.theme.colors.primaryDeep};
    }
  }
}
`;

export default function LogInPage() {
  const { isDarkMode } = useDarkMode();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    //
  };

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
      <div className="loginBox">
        <p className="login">REPIC아이디로 로그인</p>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label>
                <p>
                  E-mail
                </p>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
              </label>
            </div>
            <div>
              <label>
                <p>
                  Password
                </p>
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
              </label>
            </div>
            <button type="submit">로그인</button>
            <p>
              아직 회원이 아니신가요?
              <Link to="/signup">
                회원가입
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </Container>
  );
}
