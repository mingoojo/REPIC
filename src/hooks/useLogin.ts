import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { appAuth } from '../firebase/config';
import UserStore from '../store/UserStore';

export default function useLogin() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const userStore = container.resolve(UserStore);
  const [, store] = useStore(userStore);

  const login = (email:string, password:string) => {
    setError(null); // 아직 에러가 없으니 null 입니다.
    setIsPending(true); // 통신중이므로 true입니다.

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        setError(null);
        setIsPending(false);
        // 회원 정보를 정상적으로 받지 못하면 실패입니다.
        store.UserUpdate(user);
        if (!user) {
          throw new Error('로그인에 실패했습니다.');
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  };

  return { error, isPending, login };
}
