import { styled } from 'styled-components';
import { Comment } from '../../type/types';
import CommentItem from './CommentItem';

type CommentListProps = {
  comments: Comment[]
}

const Container = styled.div`
margin-block: 3rem;
`;

export default function CommentList({ comments }:CommentListProps) {
  return (
    <Container>
      {
        comments.sort((a, b) => b.createdTime.seconds - a.createdTime.seconds).map((comment) => (
          <CommentItem key={comment.createdTime.seconds} comment={comment} />
        ))
      }
    </Container>
  );
}
