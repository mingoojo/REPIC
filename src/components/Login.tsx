import axios from 'axios';
import React, { useState } from 'react';
import useFetchLogin from '../hooks/useFetchLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { fetchLogin } = useFetchLogin();
  function handleID(e : React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handlePW(e : React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  const handleSubmit = async () => {
    const gets = await fetchLogin({ email, password });
    console.log(gets);
  };
  return (
    <div>
      <label>
        {' '}
        e-mail
        <input type="text" id="" value={email} onChange={handleID} />
      </label>
      <label>
        {' '}
        password
        <input type="text" id="" value={password} onChange={handlePW} />
      </label>
      <button type="button" onClick={handleSubmit}>로그인</button>
    </div>
  );
}
