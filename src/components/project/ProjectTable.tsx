import styled from 'styled-components';
import { Project } from '../../type/types';
import getSortedProjectItem from '../../utils/getSortedProjectItem';
import ProjectFooterField from './ProjectFooterField';
import ProjectHeader from './ProjectHeader';
import ProjectTableBody from './ProjectTableBody';

type ProjectTableProps = {
  Page : string
  Search : string
  projects : Project[]
}

const Container = styled.div`
  
`;

export default function ProjectTable({ Page, Search, projects }:ProjectTableProps) {
  const { sortedItems } = getSortedProjectItem({ Search, projectItems: projects });
  return (
    <Container>
      <ProjectHeader Page={Page} Search={Search} />
      <ProjectTableBody projects={sortedItems} Page={Page} />
      <ProjectFooterField projects={sortedItems} Page={Page} Search={Search} />
    </Container>
  );
}
