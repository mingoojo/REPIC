import styled from 'styled-components';
import { CommunityItem } from '../../type/types';

type ItemInfoProps = {
  communityItem : CommunityItem[]
}

const Container = styled.div`
display: flex;
justify-content: space-between;
color: ${(props) => props.theme.colors.textSecond};
font-size: 1.3rem;
padding: 0;
  div{
    margin: 0px 0px .5rem 0px;
    padding: 0rem 1rem 0rem 1rem;
    white-space: nowrap;
  }
@media (max-width: 720px){
  margin-top: 3rem;
}
`;

export default function ItemInfo({ communityItem }:ItemInfoProps) {
  return (
    <Container className="itemInfo">
      <div>
        {'댓글수 : '}
        {communityItem[0].comments.length}
        개
      </div>
      <div>
        {'좋아요 : '}
        {communityItem[0].likes.length}
        개
      </div>
      <div>
        {'방문자수 : '}
        {communityItem[0].view.length}
      </div>
    </Container>
  );
}
