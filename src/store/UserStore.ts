import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

@singleton()
@Store()
export default class UserStore {
  UserInfo = {};

  isAuthReady = false;

  @Action()
  UserUpdate(userinfo:any) {
    this.UserInfo = userinfo;
  }

  @Action()
  isAuthUpdate(userinfo:any) {
    this.isAuthReady = userinfo;
  }
}
