import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CommunityItem } from '../../type/types';
import Sortingfield from './Sortingfield';
import CommunitiesTableBody from './CommunitiesTableBody';
import getSortedCommunityItem from '../../utils/getSortedCommunityItem';

type CommunitiesTableProps = {
  radioValue : string,
  communityItems : CommunityItem[]
  Page : string
  Search : string
  searchText:string
}

const Container = styled.div`

`;

export default function CommunitiesTable({
  radioValue, communityItems, Page, Search, searchText,
}
  :CommunitiesTableProps) {
  const navigate = useNavigate();
  const { sortedItems } = getSortedCommunityItem({ Search, communityItems });

  const searchConfirm = () => {
    if (searchText) {
      navigate(`/communities?page=1&sort=${radioValue}&search=${searchText}`);
    } else if (!searchText) {
      navigate(`/communities?page=1&sort=${radioValue}`);
    }
  };

  return (
    <Container>
      <Sortingfield
        radioValue={radioValue}
        Page={Page}
        searchConfirm={searchConfirm}
        searchText={searchText}
        Search={Search}
      />
      <CommunitiesTableBody
        Page={Page}
        Search={Search}
        radioValue={radioValue}
        filteredCommunityItems={sortedItems}
      />
    </Container>
  );
}
