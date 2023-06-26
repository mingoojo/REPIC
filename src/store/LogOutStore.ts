import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { firebaseService } from '../service/firebaseService';

@singleton()
@Store()
export default class LogOutStore {
  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  async logout() {
    this.setIsPending(true);
    this.setError(false);
    try {
      await firebaseService.logout();
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
}
