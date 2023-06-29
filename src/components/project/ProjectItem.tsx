import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Project } from '../../type/types';
import CardAuth from './CardAuth';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

type ProjectItemProps = {
  project : Project
}

const Container = styled.div`
width: 33%;
padding: 1rem;
  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.textMain};
    .projectCard{
      border: 1px solid ${(props) => props.theme.colors.textMain};
      border-radius: .5rem;
      padding: .5rem;
      .itemCard{
      }
    }
    .projectCard:hover{
      border: 1px solid ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.backgroundThird};
    }
  }
@media (max-width: 720px){
  width: 50%;
}
`;

export default function ProjectItem({ project }:ProjectItemProps) {
  return (
    <Container>
      <Link to={`/projects/${project.id}`}>
        <div className="projectCard">
          <CardHeader project={project} />
          <CardBody project={project} />
          <CardAuth project={project} />
        </div>
      </Link>
    </Container>
  );
}
