import { styled } from 'styled-components';
import { CommunityItem } from '../../type/types';
import CommentItem from '../ui/CommentItem';

type CommentListProps = {
  communityItem : CommunityItem[]
}

const Container = styled.div``;

export default function CommentList({ communityItem }:CommentListProps) {
  const { comments } = communityItem[0];
  return (
    <Container>
      {
        comments.sort((a, b) => b.createdTime.seconds - a.createdTime.seconds)
          .map((comment) => (<CommentItem key={comment.createdTime.seconds} comment={comment} />
          ))
      }
    </Container>
  );
}
