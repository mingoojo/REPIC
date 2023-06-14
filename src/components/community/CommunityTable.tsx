import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useCommunityStore from '../../hooks/useCommunityStore';
import ItemBox from './ItemBox';
import TableHeader from './TableHeader';

const Container = styled.div`
div{
  margin-block: 0.5rem;
}
a{
  text-decoration: none;
  color: #222;
}
a:hover{
  font-weight: bold;
}
header{
  display: flex;
  justify-content: space-between;
}
`;

export type Radio = 'Recent' | 'View' | 'Likes'

export default function CommunityTable() {
  const [{ communityItems }] = useCommunityStore();
  const [check, setCheck] = useState<Radio>('Recent');

  return (
    <Container>
      <TableHeader check={check} setCheck={setCheck} />
      <div>
        {
          communityItems.map((communityItem) => (
            <Link key={communityItem.id} to={`/communities/${communityItem.id}`}>
              <ItemBox communityItem={communityItem} />
            </Link>
          ))
        }
      </div>
    </Container>
  );
}
