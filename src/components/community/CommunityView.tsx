import { styled } from 'styled-components';
import { Radio } from '../../page/CommunityPage';
import { CommunityItem } from '../../type/types';
import CommunitiesTable from './CommunitiesTable';
import CommunityBanner from './CommunityBanner';

type CommunityViewProps = {
  radioValue : Radio
  setRadioValue : (radioValue : Radio) =>void
  communityItems : CommunityItem[]
}

const Container = styled.div`
  
`;

export default function CommunityView({
  radioValue, setRadioValue, communityItems,
}
  :CommunityViewProps) {
  return (
    <Container>
      <CommunityBanner />
      <CommunitiesTable
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        communityItems={communityItems}
      />
    </Container>
  );
}
