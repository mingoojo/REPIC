import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { appAuth } from '../firebase/config';
import useFetchSignUp from '../hooks/useFetchSignUp';

const Container = styled.div`
  form{
    display: flex;
  }
`;

export default function SignUpPage() {
  const {
    email, setEmail, password, setPassword, displayName, setDisplayName, SignUp,
  } = useFetchSignUp();

  const { currentUser } = appAuth;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    SignUp();
  }
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
