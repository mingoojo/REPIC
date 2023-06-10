/* eslint-disable @typescript-eslint/no-explicit-any */
import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

@singleton()
@Store()
export default class CollectionDocumentStore {
  CollectionDocument = [{
    id: '',
    text: '',
    title: '',
    uid: '',
    createdTime: {
      seconds: 0,
      nanoseconds: 0,
    },
  }];

  @Action()
  CollectionDocumentUpdate(payload:any) {
    this.CollectionDocument = payload;
  }
}
