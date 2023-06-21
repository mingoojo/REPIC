import { User } from 'firebase/auth';
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { firebaseService } from '../service/firebaseService';

@singleton()
@Store()
export default class LogInFormStore {
  email = '';

  password = '';

  // 현재 로그인한 유저 없다면 빈값
  user = {} as User;

  // 파이어베이스와의 통신상태
  isAuthReady = false;

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  async login() {
    const user = await firebaseService.login({ email: this.email, password: this.password });
    this.setUser(user);
  }

    @Action()
  setUser(payload:User) {
    this.user = payload;
  }

  @Action()
    setIsAuthReady(payload:boolean) {
      this.isAuthReady = payload;
    }

  @Action()
  setError(payload:boolean) {
    this.error = payload;
  }

  @Action()
  setIsPending(payload:boolean) {
    this.isPending = payload;
  }

  @Action()
  changeEmail(email:string) {
    this.email = email;
  }

  @Action()
  changePassword(password:string) {
    this.password = password;
  }
}
