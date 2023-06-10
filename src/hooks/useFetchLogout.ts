/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { authApiService } from '../apiServices/AuthApiService';

export default function useFetchLogOut() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  function LogOut() {
    authApiService.logout({ setError, setIsPending });
  }

  return {
    LogOut,
  };
}
