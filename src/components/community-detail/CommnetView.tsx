import { CommunityItem } from '../../type/types';
import CommentList from './CommentList';
import CommentWrite from './CommentWrite';

type CommnetViewProps = {
  communityItem: CommunityItem,
};

export default function CommnetView({ communityItem }:CommnetViewProps) {
  const { comments } = communityItem;
  return (
    <div>
      <CommentWrite communityItem={communityItem} />
      {comments.length ? (
        <CommentList comments={comments} />
      ) : (
        null
      )}
    </div>
  );
}
