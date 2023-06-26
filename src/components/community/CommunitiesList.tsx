import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Radio } from '../../page/CommunityPage';
import { CommunityItem } from '../../type/types';
import getSortedItems from '../../utils/getSortedItems';
import CommunitiesItem from './CommunitiesItem';

type CommunitiesListProps = {
  communityItems : CommunityItem[]
  radioValue : string
}

const Container = styled.div`

`;

export default function CommunitiesList({ communityItems, radioValue }
  :CommunitiesListProps) {
  const { RecentItems, ViewItems, LikeItems } = getSortedItems({ communityItems });
  const [sortedItems, setSortedItems] = useState<CommunityItem[]>([]);

  console.log(RecentItems);
  console.log(ViewItems);
  console.log(LikeItems);

  useEffect(() => {
    if (radioValue === 'Recent') {
      setSortedItems(RecentItems);
    }
    if (radioValue === 'View') {
      setSortedItems(ViewItems);
    }
    if (radioValue === 'Likes') {
      setSortedItems(LikeItems);
    }
  }, [radioValue]);

  return (
    <Container>
      {
        sortedItems.map((communityItem) => (
          <CommunitiesItem key={communityItem.id} communityItem={communityItem} />
        ))
      }
    </Container>
  );
}
