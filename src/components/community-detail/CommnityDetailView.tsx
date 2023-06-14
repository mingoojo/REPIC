import { styled } from 'styled-components';
import { CommunityItem } from '../../type/types';
import DetailItemView from './DetailItemView';
import CommnetView from './CommnetView';

type CommnityDetailViewProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
`;

export default function CommnityDetailView({ communityItem }:CommnityDetailViewProps) {
  return (
    <Container>
      <DetailItemView communityItem={communityItem} />
      <CommnetView communityItem={communityItem} />
    </Container>
  );
}
