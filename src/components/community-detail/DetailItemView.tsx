import { styled } from 'styled-components';
import { CommunityItem } from '../../type/types';
import DetailItemHeader from './DetailItemHeader';
import DetailItemBody from './DetailItemBody';

type DetailItemViewProps = {
  communityItem : CommunityItem
}

const Container = styled.div`

`;

export default function DetailItemView({ communityItem }:DetailItemViewProps) {
  return (
    <Container>
      <DetailItemHeader communityItem={communityItem} />
      <DetailItemBody communityItem={communityItem} />
    </Container>
  );
}
