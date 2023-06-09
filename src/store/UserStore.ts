import { User } from 'firebase/auth';
import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

@singleton()
@Store()
export default class UserStore {
  UserInfo: User = {} as User;

  @Action()
  UserUpdate(user:User) {
    this.UserInfo = user;
  }
}
