import { styled } from 'styled-components';
import { Project } from '../../type/types';
import CommentWrite from './CommentWrite';
import CommentButtonField from './CommentButtonField';
import CommentList from './CommentList';

type CommentsTableProps = {
  project : Project
}

const Container = styled.div``;

export default function CommentsTable({ project }:CommentsTableProps) {
  return (
    <Container>
      <CommentWrite project={project} />
      <CommentButtonField />
      {project.comments.length !== 0 && <CommentList project={project} />}
    </Container>
  );
}
