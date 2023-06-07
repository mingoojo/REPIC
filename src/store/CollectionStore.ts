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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DocumentUpdate(payload:any) {
    this.document = payload;
  }

  @Action()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  IsPendingUpdate(payload:any) {
    this.isPending = payload;
  }

  @Action()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ErrorUpdate(payload:any) {
    this.error = payload;
  }

  @Action()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SuccessUpdate(payload:any) {
    this.success = payload;
  }
}
