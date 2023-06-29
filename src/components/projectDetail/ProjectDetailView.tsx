import { styled } from 'styled-components';
import { useEffect } from 'react';
import { Project } from '../../type/types';
import useProjectStore from '../../hooks/useProjectStore';
import { timeStamp } from '../../firebase/config';
import CommentsTable from './CommentsTable';
import ProjectItemTable from './ProjectItemTable';

type ProjectDetailView = {
  project : Project
}

const Container = styled.div`

`;

export default function ProjectDetailView({ project }:ProjectDetailView) {
  const [, projectStore] = useProjectStore();

  // 조회수 증가
  useEffect(() => {
    const CreatedTime = String(timeStamp.fromDate(new Date()).seconds)
    + String(timeStamp.fromDate(new Date()).nanoseconds);

    projectStore.updateItemView({ docId: project.id, updateValue: CreatedTime });
  }, []);

  return (
    <Container>
      <ProjectItemTable project={project} />
      <CommentsTable project={project} />
    </Container>
  );
}
