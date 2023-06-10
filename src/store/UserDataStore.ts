/* eslint-disable @typescript-eslint/no-explicit-any */
import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

@singleton()
@Store()
export default class UserDataStore {
  document = null;

  isPending = false;

  error = null;

  success = false;

  @Action()
  DocumentUpdate(payload:any) {
    this.document = payload;
  }

  @Action()
  IsPendingUpdate(payload:boolean) {
    this.isPending = payload;
  }

  @Action()
  SuccessUpdate(payload:boolean) {
    this.success = payload;
  }

  @Action()
  ErrorUpdate(payload:any) {
    this.error = payload;
  }
}
