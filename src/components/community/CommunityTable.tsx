import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetchGetCollection from '../../hooks/useFetchGetCollection';
import CommunityItem from './CommunityItem';
import SearchField from './SearchField';
import WriteButton from './WriteButton';

const Container = styled.div`

table{
  width: 100%;
  max-width: 100%;
}
.TableHeaderDiv{
  display: flex;
  justify-content: space-between;
}
td, th{
  padding: 0.5rem;
  border: 0.5px solid #222;
}
a{
  text-decoration: none;
  color: #222;
}
a:visited {
  color: #222;
}
`;

export default function CommunityTable() {
  const { CollectionDocument } = useFetchGetCollection({ transaction: 'community' });
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th colSpan={3} className="TableHeaderDiv">
              <SearchField />
              <WriteButton />
            </th>
          </tr>
          <tr>
            <td>
              <label>
                <input type="radio" name="sorting" />
                최신순
              </label>
              <label>
                <input type="radio" name="sorting" />
                조회순
              </label>
              <label>
                <input type="radio" name="sorting" />
                좋아요순
              </label>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              CollectionDocument.map((document) => (
                <Link to={`/communities/${document.id}`} key={document.id}>
                  <CommunityItem document={document} />
                </Link>
              ))
            }
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
