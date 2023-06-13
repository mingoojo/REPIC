import styled from 'styled-components';
import useCommunityStore from '../../hooks/useCommunityStore';
import ItemBox from './ItemBox';

const Container = styled.div`
th, td{
  border: 2px solid #222;
}
`;

export default function CommunityTable() {
  const [{ communityItems }] = useCommunityStore();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>
              <label>
                <input type="radio" name="Sorting" />
                최신순
              </label>
              <label>
                <input type="radio" name="Sorting" />
                조회순
              </label>
              <label>
                <input type="radio" name="Sorting" />
                좋아요순
              </label>
            </th>
          </tr>
        </thead>
      </table>
      <div>
        {
          communityItems.map((communityItem) => (
            <ItemBox communityItem={communityItem} key={communityItem.id} />
          ))
        }
      </div>
    </Container>
  );
}
