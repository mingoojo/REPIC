import React, { useState } from 'react';
import { styled } from 'styled-components';

const Div = styled.div`
color : red;
`;

export default function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleID(e : React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handlePW(e : React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
      </form>
    </Div>
  );
}
