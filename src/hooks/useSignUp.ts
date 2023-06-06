import { createUserWithEmailAndPassword, updateProfile, User } from 'firebase/auth';
import { useState } from 'react';
import { container } from 'tsyringe';
import { appAuth } from '../firebase/config';
import UserStore from '../store/UserStore';

export default function useSignUp() {
  const store = container.resolve(UserStore);
  // 에러 정보
  const [error, setError] = useState(null);

  // 통신 정보
  const [isPending, setIsPending] = useState(false);

  type signUpProps = {
    email : string,
    password : string,
    displayName : string,
  }

  const signUp = ({ email, password, displayName }:signUpProps) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log(user);
        if (!user) {
          throw new Error('실패');
        }
        updateProfile(appAuth.currentUser as User, { displayName })
          .then(() => {
            store.UserUpdate(user);
            setError(null);
            setIsPending(false);
          }).catch((err) => {
            setError(err.message);
            setIsPending(false);
          });
      })
      .catch((Error) => {
        const errorMessage = Error.message;
        setError(errorMessage);
        setIsPending(false);
      });
  };

  return {
    signUp, error, isPending,
  };
}
