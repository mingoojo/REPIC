import styled from 'styled-components';
import { CommunityItem } from '../../type/types';

type ItmeBoxProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
  width: 100%;
  border: 2px solid #222;
`;

export default function ItemBox({ communityItem }:ItmeBoxProps) {
  return (
    <Container>
      <h1>{communityItem.title}</h1>
    </Container>
  );
}
