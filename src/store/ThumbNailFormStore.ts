import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { firebaseService } from '../service/firebaseService';

@singleton()
@Store()
export default class ThumbNailFormStore {
  imageFile = {} as File;

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  // 이미지 업로드
  async uploadImage() {
    this.setIsPending(true);
    this.setError(false);
    try {
      await firebaseService.ThumbsUpload({ file: this.imageFile });
      this.setIsPending(false);
      this.setError(false);
    } catch (error) {
      this.setIsPending(false);
      this.setError(true);
    }
  }

  @Action()
  setImageFile(imageFile:File) {
    this.imageFile = imageFile;
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
