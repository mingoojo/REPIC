import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CommunityItem } from '../../type/types';
import CommunitiesItem from './CommunitiesItem';

type CommunitiesListProps = {
  communityItems : CommunityItem[]
  radioValue : string
}

const Container = styled.div`
  a{
    text-decoration: none;
  }

`;

export default function CommunitiesList({ communityItems, radioValue }
  :CommunitiesListProps) {
  useEffect(() => {
    if (radioValue === 'Recent') {
      communityItems.sort((a, b) => b.createdTime.seconds - a.createdTime.seconds);
    } else if (radioValue === 'View') {
      communityItems.sort((a, b) => b.view.length - a.view.length);
    } else if (radioValue === 'Likes') {
      communityItems.sort((a, b) => b.likes.length - a.likes.length);
    }
  }, [radioValue, communityItems]);

  return (
    <Container>
      {
        communityItems.map((communityItem) => (
          <Link key={communityItem.id} to={`/communities/${communityItem.id}`}>
            <CommunitiesItem communityItem={communityItem} />
          </Link>
        ))
      }
    </Container>
  );
}
