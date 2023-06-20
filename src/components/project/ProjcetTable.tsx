import styled from 'styled-components';
import { ProjectItem } from '../../type/types';
import ProjectHeader from './ProjectHeader';
import Project from './Project';

type ProjcetTableProps = {
  projects : ProjectItem[]
}

const Container = styled.div`
  .projectList{
    display: flex;
    justify-content: space-between;
    a{
      text-decoration: none;
      color: ${(props) => props.theme.colors.textMain};
    }
  }
`;

export default function ProjcetTable({ projects }:ProjcetTableProps) {
  return (
    <Container>
      <table>
        <ProjectHeader />
      </table>
      <div className="projectList">
        {
          projects.map((project) => (
            <Project project={project} key={project.id} />
          ))
        }
      </div>
    </Container>
  );
}
