import { styled } from 'styled-components';
import CommunitiesList from './CommunitiesList';
import { CommunityItem } from '../../type/types';
import CommunityFooterField from './CommunityFooterField';

type CommunitiesTableBodyProps = {
  Page:string
  Search : string
  radioValue:string
  filteredCommunityItems:CommunityItem[]
}

const Container = styled.div`

`;

export default function CommunitiesTableBody({
  Page, Search, radioValue, filteredCommunityItems,
}
  :CommunitiesTableBodyProps) {
  const routedCommunityItems = filteredCommunityItems.filter((communityItem, index) => (
    index < (Number(Page)) * 10 && (Number(Page) - 1) * 10 <= index
  ));

  return (
    <Container>
      <CommunitiesList communityItems={routedCommunityItems} />
      <CommunityFooterField
        Page={Page}
        Search={Search}
        radioValue={radioValue}
        communityItems={filteredCommunityItems}
      />
    </Container>
  );
}
