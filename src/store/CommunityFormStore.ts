import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { firebaseService } from '../service/firebaseService';

@singleton()
@Store()
export default class CommunityFormStore {
  title = '';

  text = '';

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  async addDocument() {
    this.setIsPending(true);
    this.setError(false);
    try {
      await firebaseService.addDocument({ transaction: 'Communities', title: this.title, text: this.text });
      this.setIsPending(false);
      this.setError(false);
    } catch (error) {
      this.setIsPending(false);
      this.setError(true);
    }
  }

  @Action()
  changeTitle(title : string) {
    this.title = title;
  }

  @Action()
  changeText(text : string) {
    this.text = text;
  }

  @Action()
  setError(payload:boolean) {
    this.error = payload;
  }

  @Action()
  setIsPending(payload:boolean) {
    this.isPending = payload;
  }
}
