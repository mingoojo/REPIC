import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { firebaseService } from '../service/firebaseService';

@singleton()
@Store()
export default class SignUpFormStore {
  email = '';

  displayName = '';

  password = '';

  passwordComfirm = '';

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  async signup() {
    try {
      this.setIsPending(true);
      this.setError(false);
      await firebaseService.signup(
        { email: this.email, displayName: this.displayName, password: this.password },
      ).then(() => {
        firebaseService.addDocument({ email: this.email, nickName: this.displayName, transaction: 'Users' });
      });
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
  changeDisplayName(displayName:string) {
    this.displayName = displayName;
  }

  @Action()
  changePassword(password:string) {
    this.password = password;
  }

  @Action()
  changePasswordComfirm(passwordComfirm:string) {
    this.passwordComfirm = passwordComfirm;
  }

  get valid() {
    return this.email.includes('@')
      && !!this.displayName
      && this.password.length >= 4
      && this.password === this.passwordComfirm;
  }
}
