import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import useSginUp from '../hooks/useSginUp';
import useStore from '../hooks/useStore';

const Div = styled.div`
color : red;
`;

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { error, isPending, signup } = useSginUp();
  const store = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(store.state.UserInfo);
    if (store.state.UserInfo) {
      navigate('/', { replace: true });
    }
  }, [isPending]);

  function handleID(e : React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handlePW(e : React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function handleNickName(e : React.ChangeEvent<HTMLInputElement>) {
    setDisplayName(e.target.value);
  }
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signup(email, password, displayName);
  }
  return (
    <Div>
      <h3>sign up</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            ID
            <input type="email" name="ID" value={email} onChange={handleID} />
          </label>
          <label>
            PASSWORD
            <input type="password" name="PW" value={password} onChange={handlePW} />
          </label>
          <label>
            NickName
            <input type="test" name="NickName" value={displayName} onChange={handleNickName} />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </Div>
  );
}
