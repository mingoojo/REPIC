import { styled } from 'styled-components';

const ContainerThead = styled.thead`
`;

export default function ProjectHeader() {
  return (
    <ContainerThead>
      <tr>
        <td>
          <input type="radio" name="sorting" id="All" defaultChecked />
          <label htmlFor="All">All</label>
        </td>
        <td>
          <input type="radio" name="sorting" id="Front" />
          <label htmlFor="Front">Front</label>
        </td>
        <td>
          <input type="radio" name="sorting" id="Back" />
          <label htmlFor="Back">Back</label>
        </td>
      </tr>
    </ContainerThead>
  );
}
