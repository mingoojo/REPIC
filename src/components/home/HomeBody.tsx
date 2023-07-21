import { styled } from 'styled-components';
import CommunitySide from './CommunitySide';
import ProjectSide from './ProjectSide';

const Container = styled.div`
width: 100%;
min-height: 90vh;
display: flex;
justify-content: space-between;
`;

export default function HomeBody() {
  return (
    <Container>
      <CommunitySide />
      <ProjectSide />
    </Container>
  );
}
