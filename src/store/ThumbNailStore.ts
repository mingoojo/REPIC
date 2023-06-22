import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { firebaseService } from '../service/firebaseService';

@singleton()
@Store()
export default class ThumbNailStore {
  imageUrl = '';

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  // 이미지 얻기
  async downloadURl() {
    this.setIsPending(true);
    this.setError(false);
    try {
      const URL = await firebaseService.ThumbsDownload();
      this.setImageURL(URL);
      this.setIsPending(false);
      this.setError(false);
    } catch (error) {
      this.setIsPending(false);
      this.setError(true);
    }
  }

  @Action()
  setImageURL(URL:string) {
    this.imageUrl = URL;
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
