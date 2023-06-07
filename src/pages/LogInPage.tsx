import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { appAuth } from '../firebase/config';
import useLogin from '../hooks/useLogin';

const Div = styled.div`
color : red;
`;

export default function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error, isPending } = useLogin();

  function handleID(e : React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handlePW(e : React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(email, password);
  }
  return (
    <Div>
      <h3>login</h3>
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
        </fieldset>
        <button type="submit">submit </button>
      </form>
    </Div>
  );
}
