import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import useLogin from '../hooks/useLogin';
import useStore from '../hooks/useStore';

const Div = styled.div`
color : red;
`;

export default function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isPending, login } = useLogin();
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
          {
            isPending ? <strong>로그인 진행중입니다.</strong> : <button type="submit">로그인</button>
          }
          { error && <strong>{error}</strong>}
        </fieldset>
      </form>
    </Div>
  );
}
