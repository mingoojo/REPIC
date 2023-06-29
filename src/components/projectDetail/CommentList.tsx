import { styled } from 'styled-components';
import { Project } from '../../type/types';
import CommentItem from '../ui/CommentItem';

type CommentListProps = {
  project : Project
}

const Container = styled.div``;

export default function CommentList({ project }:CommentListProps) {
  const { comments } = project;
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
