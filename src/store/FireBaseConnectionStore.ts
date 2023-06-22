import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { appAuth } from '../firebase/config';

@singleton()
@Store()
export default class FireBaseConnectionStore {
  connection = false;

  error = false;

  async unsubscribe() {
    this.setConnection(false);
    try {
      await appAuth.onAuthStateChanged((userCurrent) => {
        if (userCurrent) {
          this.setConnection(true);
        }
      });
    } catch (error) {
      this.setError(true);
    }
  }

  @Action()
  setConnection(payload: boolean) {
    this.connection = payload;
  }

  @Action()
  setError(payload: boolean) {
    this.error = payload;
  }
}
