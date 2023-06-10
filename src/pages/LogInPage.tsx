import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { appAuth } from '../firebase/config';
import useFetchLogin from '../hooks/useFetchLogin';

const Container = styled.div`
  
`;

export default function LogInPage() {
  const {
    email, setEmail, password, setPassword, Login,
  } = useFetchLogin();

  const { currentUser } = appAuth;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Login();
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Log In</legend>
          <label>
            E-mail
            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
          </label>
          <button type="submit">submit</button>
        </fieldset>
      </form>
    </Container>
  );
}
