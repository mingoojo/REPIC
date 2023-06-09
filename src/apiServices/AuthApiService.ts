import { signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { container } from 'tsyringe';
import { appAuth } from '../firebase/config';
import UserStore from '../store/UserStore';

type loginProps = {
  setError: (error:any) => void
  setIsPending: (isPending: boolean) => void
  email : string
  password: string
}

type logoutProps = {
  setError: (error:any) => void
  setIsPending: (isPending: boolean) => void
}

export default class AuthApiService {
  store = container.resolve(UserStore);

  nullUser = {} as User;

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
      console.log(appAuth.currentUser);
      console.log(this.store.UserInfo);
    }).catch((err) => {
      setError(err.message);
      setIsPending(false);
      console.log(err.message);
    });
  }
}

export const authApiService = new AuthApiService();
