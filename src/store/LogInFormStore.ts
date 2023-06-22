import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { firebaseService } from '../service/firebaseService';

@singleton()
@Store()
export default class LogInFormStore {
  email = '';

  password = '';

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  async login() {
    try {
      this.setIsPending(true);
      this.setError(false);
      await firebaseService.login({ email: this.email, password: this.password });
      this.setIsPending(false);
      this.setError(false);
    } catch (error) {
      this.setError(true);
      this.setIsPending(false);
    }
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

  get valid() {
    return this.email.includes('@') && this.password.length >= 4;
  }
}
