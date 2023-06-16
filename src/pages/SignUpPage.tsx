import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import { appAuth } from '../firebase/config';
import useFetchUserStore from '../hooks/useFetchUserStore';
import useUserStore from '../hooks/useUserStore';

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
.signupBox{
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

export default function SignUpPage() {
  const { isDarkMode } = useDarkMode();
  const {
    email, setEmail, password, setPassword, displayName, setDisplayName, signup,
  } = useFetchUserStore();
  const [{ user }] = useUserStore();
  const navigate = useNavigate();
  const { currentUser } = appAuth;

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup();
  };
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, user]);
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
      <div className="signupBox">
        <p className="signup">REPIC회원가입</p>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label>
                <p>
                  NickName
                </p>
                <input type="text" value={displayName} onChange={(e) => { setDisplayName(e.target.value); }} />
              </label>
            </div>
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
            <button type="submit">가입하기</button>
            <p>
              이미 회원이신가요?
              <Link to="/signup">
                로그인
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </Container>
  );
}
