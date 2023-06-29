import { styled } from 'styled-components';
import { Project, UserData } from '../../type/types';
import AuthorInfo from './AuthorInfo';
import ItemInfo from './ItemInfo';

type ProjectItemHeaderProps = {
  project : Project
  UserInfo : UserData[]
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0rem 1rem 2rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.textMain};

@media (max-width: 720px){
  flex-direction: column;
  align-items: flex-start;
}
`;

export default function ProjectItemHeader({ project, UserInfo }:ProjectItemHeaderProps) {
  return (
    <Container>
      <AuthorInfo UserInfo={UserInfo} project={project} />
      <ItemInfo project={project} />
    </Container>
  );
}
