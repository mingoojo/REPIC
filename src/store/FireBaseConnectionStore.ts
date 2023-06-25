/* eslint-disable no-console */
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
      const Unsubscribe = await appAuth.onAuthStateChanged(() => {
        console.log('connecting');
        this.setConnection(true);
      });
      Unsubscribe();
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
