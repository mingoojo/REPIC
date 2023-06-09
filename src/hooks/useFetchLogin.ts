import { useState } from 'react';
import { authApiService } from '../apiServices/AuthApiService';

export default function useFetchLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  function Login() {
    authApiService.login({
      email, password, setError, setIsPending,
    });
  }

  return {
    email, setEmail, password, setPassword, Login,
  };
}
