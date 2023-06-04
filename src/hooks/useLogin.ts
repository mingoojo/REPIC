import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { appAuth } from '../firebase/config';
import useDispatch from './useDispatch';
import { getUserInfo } from '../store/Store';

export default function useLogin() {
  // 에러정보 저장
  const [error, setError] = useState(null);
  // 통신 상태 저장
  const [isPending, setIsPending] = useState(false);

  // store dispatch 받아오기.
  const dispatch = useDispatch();

  const login = (email:string, password:string) => {
    setError(null);
    setIsPending(true);
    signInWithEmailAndPassword(appAuth, email, password).then((userCredential) => {
      const { user } = userCredential;
      dispatch(getUserInfo(JSON.stringify(user)));
      setError(null);
      setIsPending(false);

      if (!user) {
        throw new Error('fail');
      }
    }).catch((err) => {
      setError(err.message);
      setIsPending(false);
    });
  };
  return { error, isPending, login };
}
