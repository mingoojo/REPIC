import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useLogInFormStore from '../../hooks/useLogInFormStore';
import Button from '../ui/Button';
import InputBundle from '../ui/InputBundle';

const Container = styled.div`
margin-top: 3rem;
text-align: center;
  p{
    color: ${(props) => props.theme.colors.textMain}
  }
  form{
    margin: auto;
    margin-block: 2rem;
    max-width: 300px;
    div{
      margin-block: 1rem;
    }
    p{
      margin-top: 2rem;
      a{
        color: ${(props) => props.theme.colors.primaryDeep};
      }
    }
  }
`;

export default function LogInForm() {
  const [{ email, password }, store] = useLogInFormStore();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.login();
  };

  const setEmail = (value:string) => {
    store.changeEmail(value);
  };

  const setPassword = (value:string) => {
    store.changePassword(value);
  };

  return (
    <Container className="loginBox">
      <p className="login">REPIC아이디로 로그인</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <InputBundle value={email} onChange={setEmail} label="Email" />
          <InputBundle value={password} onChange={setPassword} label="Password" type="password" />
          <Button label="로그인" type="submit" />
          <p>
            아직 회원이 아니신가요?
            <Link to="/signup">회원가입</Link>
          </p>
        </fieldset>
      </form>
    </Container>
  );
}
