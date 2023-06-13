import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { appAuth } from '../firebase/config';
import useFetchUserStore from '../hooks/useFetchUserStore';
import useUserStore from '../hooks/useUserStore';

const Container = styled.div`
  form{
    display: flex;
  }
`;

export default function SignUpPage() {
  const {
    email, setEmail, password, setPassword, displayName, setDisplayName, signup,
  } = useFetchUserStore();
  const [{ user }] = useUserStore();
  const navigate = useNavigate();
  const { currentUser } = appAuth;
  console.log(currentUser);

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
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Log In</legend>
          <label>
            NickName
            <input type="text" value={displayName} onChange={(e) => { setDisplayName(e.target.value); }} />
          </label>
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
