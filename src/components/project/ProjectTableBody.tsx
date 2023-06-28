import { styled } from 'styled-components';
import { Project } from '../../type/types';
import ProjectItem from './ProjectItem';

type ProjectTableBodyProps = {
  projects : Project[]
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function ProjectTableBody({ projects }:ProjectTableBodyProps) {
  return (
    <Container>
      {
        projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))
      }
    </Container>
  );
}
