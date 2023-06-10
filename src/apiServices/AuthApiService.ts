import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, User,
} from 'firebase/auth';
import { container } from 'tsyringe';
import { appAuth } from '../firebase/config';
import UserStore from '../store/UserStore';

type loginProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setError: (error:any) => void
  setIsPending: (isPending: boolean) => void
  email : string
  password: string
}

type logoutProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setError: (error:any) => void
  setIsPending: (isPending: boolean) => void
}

type signUpProps = {
  email:string
  password:string
  displayName :string
  setIsPending : (isPending: boolean) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setError: (error:any) => void
}

export default class AuthApiService {
  store = container.resolve(UserStore);

  nullUser = {} as User;

  // 로그인 기능
  login({
    setError, setIsPending, email, password,
  }:loginProps) {
    setError(null); // 아직 에러가 없으니 null 입니다.
    setIsPending(true); // 통신중이므로 true입니다.

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        setError(null);
        setIsPending(false);
        // 회원 정보를 정상적으로 받지 못하면 실패입니다.
        this.store.UserUpdate(user);
        // eslint-disable-next-line no-console
        console.log(user);
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
  }

  // 로그아웃 기능
  logout({
    setError, setIsPending,
  }:logoutProps) {
    setError(null); // 아직 에러가 없으니 null 입니다.
    setIsPending(true); // 통신중이므로 true입니다.

    signOut(appAuth).then(() => {
      // 로그아웃 성공!
      setError(null);
      setIsPending(false);
      this.store.UserUpdate(this.nullUser);
      // eslint-disable-next-line no-console
      console.log(appAuth.currentUser);
    }).catch((err) => {
      setError(err.message);
      setIsPending(false);
    });
  }

  // 가입하기 기능
  signUp({
    email, password, displayName, setError, setIsPending,
  }:signUpProps) {
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
            this.store.UserUpdate(user);
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
  }
}

export const authApiService = new AuthApiService();
