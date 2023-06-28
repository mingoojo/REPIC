import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import CommentFormStore from '../store/CommentFormStore';

export default function useCommentFormStore() {
  const commentFormStore = container.resolve(CommentFormStore);
  return useStore(commentFormStore);
}
