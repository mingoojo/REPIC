import { styled } from 'styled-components';
import { Project } from '../../type/types';

type ItemTitleProps = {
  projectItem : Project
}

const Container = styled.div`
margin: 1rem 0rem 0.2rem 0rem;
  h1{
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export default function ItemTitle({ projectItem }:ItemTitleProps) {
  return (
    <Container className="projectTitle">
      <h1>{projectItem.title}</h1>
    </Container>
  );
}
