import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { CommunityItem } from '../../type/types';
import CommunitiesTable from './CommunitiesTable';
import CommunityBanner from './CommunityBanner';
import useForceUpdate from '../../hooks/useForceUpdate';

type CommunityViewProps = {
  radioValue : string
  communityItems : CommunityItem[]
  Page : string
  Search : string
  searchText : string
}

const Container = styled.div`
  
`;

export default function CommunityView({
  radioValue, communityItems, Page, Search, searchText,
}
  :CommunityViewProps) {
  const forceUpdate = useForceUpdate();
  const [sortedItem, setSortedItem] = useState(communityItems);

  useEffect(() => {
    if (radioValue === 'Recent') {
      setSortedItem([...communityItems].sort((a, b) => (
        b.createdTime.seconds - a.createdTime.seconds)));
    } else if (radioValue === 'View') {
      setSortedItem([...communityItems].sort((a, b) => (b.view.length - a.view.length)));
    } else if (radioValue === 'Likes') {
      setSortedItem([...communityItems].sort((a, b) => (b.likes.length - a.likes.length)));
    }
    forceUpdate();
  }, [radioValue, communityItems]);

  return (
    <Container>
      <CommunityBanner />
      <CommunitiesTable
        radioValue={radioValue}
        communityItems={sortedItem}
        Page={Page}
        Search={Search}
        searchText={searchText}
      />
    </Container>
  );
}
