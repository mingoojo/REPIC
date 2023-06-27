import { styled } from 'styled-components';
import CommunitiesList from './CommunitiesList';
import FooterField from './FooterField';
import { CommunityItem } from '../../type/types';

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
  const sortedCommunityItems = filteredCommunityItems.filter((communityItem, index) => (
    index < (Number(Page)) * 10 && (Number(Page) - 1) * 10 <= index
  ));

  return (
    <Container>
      <CommunitiesList communityItems={sortedCommunityItems} />
      <FooterField
        Page={Page}
        Search={Search}
        communityItems={filteredCommunityItems}
        radioValue={radioValue}
      />
    </Container>
  );
}
