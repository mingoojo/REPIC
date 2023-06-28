import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { firebaseService } from '../service/firebaseService';
import { Comment, CreatedTime } from '../type/types';

@singleton()
@Store()
export default class CommentFormStore {
  comment = '';

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  // 댓글 업데이트
  async updateComment({ docId, uid, createdTime }:{
    docId:string, uid : string, createdTime:CreatedTime}) {
    this.setIsPending(true);
    this.setError(false);
    const likes = [] as string[];
    const updateValue : Comment = {
      uid,
      createdTime,
      text: this.comment,
      likes,
    };
    try {
      await firebaseService.writeDocumentFieldArray({
        tranaction: 'Communities', docId, updateKey: 'comments', updateValue,
      });
      this.setIsPending(false);
      this.setError(false);
      this.changeComment('');
    } catch (error) {
      this.setIsPending(false);
      this.setError(true);
    }
  }

  @Action()
  changeComment(comment: string) {
    this.comment = comment;
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
