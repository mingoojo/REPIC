import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

@singleton()
@Store()
export default class UserStore {
  UserInfo = {};

  isAuthReady = false;

  @Action()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  UserUpdate(userinfo:any) {
    this.UserInfo = userinfo;
  }

  @Action()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isAuthUpdate(userinfo:any) {
    this.isAuthReady = userinfo;
  }
}
