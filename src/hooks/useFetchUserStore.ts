import { useState } from 'react';
import { container } from 'tsyringe';
import UserStore from '../store/UserStore';

export default function useFetchUserStore() {
  const store = container.resolve(UserStore);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  // 로그인하기
  const login = () => {
    store.login({ email, password });
  };

  // 로그아웃하기
  const { logout } = store;

  // 가입하기
  const signup = async () => {
    await store.signup({ email, password, displayName });
  };

  return {
    email, password, displayName, setEmail, setPassword, setDisplayName, logout, login, signup,
  };
}
