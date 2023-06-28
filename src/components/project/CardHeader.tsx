import { styled } from 'styled-components';
import { Project } from '../../type/types';

type CartHeaderProps = {
  project : Project
}

const Container = styled.div`
  .deadLine{
    display: flex;
    p{
      margin-block: .5rem;
      padding: 1rem;
      font-size: 1.2rem;
    }
  }
  div{
    h1{
      margin-block: .5rem;
      padding: 1rem;
      font-weight: bold;
    }
  }
`;

export default function CardHeader({ project }:CartHeaderProps) {
  return (
    <Container className="itemCard">
      <div className="deadLine">
        <p>
          기간 |
          <br />
          <br />
          {project.startDate}
          {' - '}
          {project.endDate}
        </p>
      </div>
      <div>
        <h1>
          {project.title}
        </h1>
      </div>
    </Container>
  );
}
