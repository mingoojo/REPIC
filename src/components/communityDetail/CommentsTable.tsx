import { styled } from 'styled-components';
import { CommunityItem } from '../../type/types';
import CommentList from './CommentList';
import CommentWrite from './CommentWrite';
import CommentButtonField from './CommentButtonField';

type CommentsTableProps = {
  communityItem : CommunityItem[]
}

const Container = styled.div``;

export default function CommentsTable({ communityItem }:CommentsTableProps) {
  return (
    <Container>
      <CommentWrite communityItem={communityItem} />
      <CommentButtonField />
      {communityItem[0].comments.length !== 0 && <CommentList communityItem={communityItem} />}
    </Container>
  );
}
