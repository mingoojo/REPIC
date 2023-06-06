import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

@singleton()
@Store()
export default class UserStore {
  User = {};

  @Action()
  UserUpdate(userinfo:any) {
    this.User = userinfo;
  }
}
