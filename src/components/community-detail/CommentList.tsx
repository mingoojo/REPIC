import { useEffect } from 'react';
import { styled } from 'styled-components';
import useFetchPrivateStore from '../../hooks/useFetchPrivateStore';
import { Comment } from '../../type/types';
import CommentItem from './CommentItem';

type CommentListProps = {
  comments: Comment[]
}

const Container = styled.div`
`;

export default function CommentList({ comments }:CommentListProps) {
  const { fetchGet } = useFetchPrivateStore();
  useEffect(() => {
    fetchGet();
  }, []);
  return (
    <Container>
      {
        comments.map((comment) => (
          <CommentItem key={comment.createdTime.seconds} comment={comment} />
        ))
      }
    </Container>
  );
}
