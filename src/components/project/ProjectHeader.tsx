import styled from 'styled-components';
import FilterField from './FilterField';
import SearchField from './SearchField';

type ProjectHeaderProps = {
  Page : string
  Search : string
}

const Container = styled.div`
padding-block: 2rem;
border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
justify-content: space-between;
align-items: center;
  table{
    padding-block: 1.2rem;
    width: 100%;
    thead{
      display: flex;
      justify-content: space-between;
    }
  }
@media (max-width: 720px){
  table{
    thead{
      display: block;
    }
  }
}
`;

export default function ProjectHeader({ Page, Search }:ProjectHeaderProps) {
  return (
    <Container>
      <table>
        <thead>
          <FilterField Page={Page} Search={Search} />
          <SearchField />
        </thead>
      </table>
    </Container>
  );
}
