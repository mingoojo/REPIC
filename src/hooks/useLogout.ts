import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { appAuth } from '../firebase/config';
import { logoutUser } from '../store/Store';
import useDispatch from './useDispatch';

export default function useLogout() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const logout = () => {
    setError(null);
    setIsPending(true);

    signOut(appAuth).then(() => {
      // Sign-out successful.
      dispatch(logoutUser());
      setError(null);
      setIsPending(false);
    }).catch((Error) => {
      // An error happened.
      setError(Error.message);
      setIsPending(false);
    });
  };

  return { error, isPending, logout };
}
