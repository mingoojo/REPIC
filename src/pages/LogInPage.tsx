import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { appAuth } from '../firebase/config';
import useFetchUserStore from '../hooks/useFetchUserStore';
import useUserStore from '../hooks/useUserStore';

const Container = styled.div`
  
`;

export default function LogInPage() {
  const navigate = useNavigate();

  const [{ user }] = useUserStore();
  const { currentUser } = appAuth;

  const {
    email, setEmail, password, setPassword, login,
  } = useFetchUserStore();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, user]);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

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
