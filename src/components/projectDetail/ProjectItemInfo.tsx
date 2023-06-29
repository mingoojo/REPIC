import { styled } from 'styled-components';
import { Project } from '../../type/types';
import InfoBox from './InfoBox';

type ProjectItemInfoProps = {
  project : Project
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.textMain};

@media (max-width: 720px){
  /* flex-direction: column;
  align-items: flex-start; */
}
`;

export default function ProjectItemInfo({ project }:ProjectItemInfoProps) {
  return (
    <Container>
      <InfoBox label="모집구분" value={project.proceedingMethod} type="proceedingMethod" />
      <InfoBox label="모집상태" type="status" project={project} />
      <InfoBox label="시작예정" value={project.startDate} type="startDate" />
      <InfoBox label="종료예정" value={project.endDate} type="endDate" />
      <InfoBox label="모집분야" value={project.recruit} type="recruit" />
      <InfoBox label="사용스택" type="stacks" project={project} />
    </Container>
  );
}
