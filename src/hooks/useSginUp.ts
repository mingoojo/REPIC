import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, User } from 'firebase/auth';
import { appAuth } from '../firebase/config';
import useDispatch from './useDispatch';
import { getUserInfo } from '../store/Store';

export default function useSginUp() {
  // 에러정보 저장
  const [error, setError] = useState(null);
  // 통신 상태 저장
  const [isPending, setIsPending] = useState(false);

  // store dispatch 받아오기.
  const dispatch = useDispatch();

  const signup = (email:string, password:string, displayName:string) => {
    setError(null);
    setIsPending(true);
    createUserWithEmailAndPassword(appAuth, email, password).then((userCredential) => {
      const { user } = userCredential;
      console.log(user);

      if (!user) {
        throw new Error('fail');
      }
      updateProfile(appAuth.currentUser as User, { displayName }).then(() => {
        dispatch(getUserInfo(JSON.stringify(user)));
        setError(null);
        setIsPending(false);
      }).catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
    }).catch((err) => {
      setError(err.message);
      setIsPending(false);
    });
  };
  return { error, isPending, signup };
}
