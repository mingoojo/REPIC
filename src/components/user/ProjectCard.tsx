import styled from 'styled-components';
import { UserData } from '../../type/types';
import getAuthorProject from '../../utils/getAuthorProject';
import ProjectList from './ProjectList';

type ProjectCardProps = {
  UserInfo : UserData
}

const Container = styled.div`

`;

export default function ProjectCard({ UserInfo }:ProjectCardProps) {
  const { AuthorProject } = getAuthorProject({ uid: UserInfo.uid });
  if (!AuthorProject.length) {
    return null;
  }
  return (
    <Container>
      <ProjectList projectItems={AuthorProject} />
    </Container>
  );
}
