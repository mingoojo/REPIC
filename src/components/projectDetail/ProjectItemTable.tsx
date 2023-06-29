import { useEffect } from 'react';
import { styled } from 'styled-components';
import useUserInfoStore from '../../hooks/useUserInfoStore';
import { Project } from '../../type/types';
import ProjectItemHeader from './ProjectItemHeader';
import ProjectItemInfo from './ProjectItemInfo';
import ProjectItemBody from './ProjectItemBody';

type ProjectDetailTableProps = {
  project : Project
}

const Container = styled.div`

`;

export default function ProjectItemTable({ project }:ProjectDetailTableProps) {
  const [{ UserInfo }, userInfoStore] = useUserInfoStore();

  useEffect(() => {
    userInfoStore.readUserInfo({ uid: project.uid });
  }, []);

  if (!UserInfo.length) {
    return null;
  }

  return (
    <Container>
      <ProjectItemHeader UserInfo={UserInfo} project={project} />
      <ProjectItemInfo project={project} />
      <ProjectItemBody project={project} />
    </Container>
  );
}
