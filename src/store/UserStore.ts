import { User } from 'firebase/auth';
import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

@singleton()
@Store()
export default class UserStore {
  UserInfo: User = {} as User;

  isAuthReady = false;

  @Action()
  UserUpdate(payload:User) {
    this.UserInfo = payload;
  }

  @Action()
  isAuthUpdate(payload:boolean) {
    this.isAuthReady = payload;
  }
}
