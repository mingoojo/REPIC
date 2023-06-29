import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { CommunityItem } from '../../type/types';
import CommunitiesItem from '../community/CommunitiesItem';
import MoreViewButton from '../ui/MoreViewButton';

type CommnuityListProps = {
  CommunityItems : CommunityItem[]
}

const Container = styled.div`
  .communityBox{
    a{
      text-decoration: none;
    }
    margin-bottom: 1rem;
  }
  .buttonBox{
    margin-block: 1rem;
  }
`;

export default function CommnuityList({ CommunityItems }:CommnuityListProps) {
  const [infinityNumber, setInfinityNumber] = useState(1);

  const routedCommunityItems = CommunityItems.filter((communityItem, index) => (
    index < (infinityNumber) * 10
  ));
  return (
    <Container>
      <div className="communityBox">
        {
          routedCommunityItems.map((communityItem) => (
            <Link key={communityItem.id} to={`/communities/${communityItem.id}`}>
              <CommunitiesItem communityItem={communityItem} />
            </Link>
          ))
        }
      </div>
      {
        (infinityNumber) * 10 < CommunityItems.length ? (
          <div className="buttonBox">
            <MoreViewButton infinityNumber={infinityNumber} setInfinityNumber={setInfinityNumber} />
          </div>
        ) : (
          null

        )
      }
    </Container>
  );
}
