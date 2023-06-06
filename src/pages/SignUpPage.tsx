import React, { useState } from 'react';
import { styled } from 'styled-components';
import useSignUp from '../hooks/useSignUp';

const Div = styled.div`
color : red;
`;

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signUp, error, isPending } = useSignUp();

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
    signUp({ email, password, displayName });
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
