import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

@singleton()
@Store()
export default class CollectionStore {
  document = null;

  isPending = false;

  error = null;

  success = false;

  @Action()
  DocumentUpdate(payload:any) {
    this.document = payload;
  }

  @Action()
  IsPendingUpdate(payload:any) {
    this.isPending = payload;
  }

  @Action()
  ErrorUpdate(payload:any) {
    this.error = payload;
  }

  @Action()
  SuccessUpdate(payload:any) {
    this.success = payload;
  }
}
