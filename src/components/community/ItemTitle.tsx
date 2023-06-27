import { styled } from 'styled-components';
import { CommunityItem } from '../../type/types';

type ItemTitleProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
margin: 1rem 0rem 0.2rem 0rem;
  h1{
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export default function ItemTitle({ communityItem }:ItemTitleProps) {
  return (
    <Container className="communityTitle">
      <h1>{communityItem.title}</h1>
    </Container>
  );
}
