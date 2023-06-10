import { useState } from 'react';
import { authApiService } from '../apiServices/AuthApiService';

export default function useFetchSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  function SignUp() {
    authApiService.signUp({
      email, password, displayName, setError, setIsPending,
    });
  }

  return {
    email, setEmail, password, setPassword, displayName, setDisplayName, SignUp,
  };
}
