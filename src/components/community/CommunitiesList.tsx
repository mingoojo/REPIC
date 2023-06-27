import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CommunityItem } from '../../type/types';
import CommunitiesItem from './CommunitiesItem';

type CommunitiesListProps = {
  communityItems : CommunityItem[]
}

const Container = styled.div`
  a{
    text-decoration: none;
  }

`;

export default function CommunitiesList({ communityItems }
  :CommunitiesListProps) {
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
