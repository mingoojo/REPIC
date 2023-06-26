import styled from 'styled-components';
import { Radio } from '../../page/CommunityPage';
import { CommunityItem } from '../../type/types';
import CommunitiesList from './CommunitiesList';
import Sortingfield from './Sortingfield';

type CommunitiesTableProps = {
  radioValue : Radio,
  setRadioValue : (radioValue : Radio) =>void,
  communityItems : CommunityItem[]
}

const Container = styled.div`
  
`;

export default function CommunitiesTable({
  radioValue, setRadioValue, communityItems,
}
  :CommunitiesTableProps) {
  return (
    <Container>
      <Sortingfield radioValue={radioValue} setRadioValue={setRadioValue} />
      <CommunitiesList
        communityItems={communityItems}
        radioValue={radioValue}
      />
    </Container>
  );
}
