import { styled } from 'styled-components';
import { Project } from '../../type/types';
import ProjectItem from './ProjectItem';

type ProjectTableBodyProps = {
  projects : Project[]
  Page: string
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function ProjectTableBody({ projects, Page }:ProjectTableBodyProps) {
  const routedProjectsItems = projects.filter((project, index) => (
    index < (Number(Page)) * 12 && (Number(Page) - 1) * 12 <= index
  ));
  return (
    <Container>
      {
        routedProjectsItems.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))
      }
    </Container>
  );
}
