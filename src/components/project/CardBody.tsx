import styled from 'styled-components';
import { Project } from '../../type/types';

type CardBodyProps = {
  project : Project
}

const Container = styled.div`
  .textBody{
    p{
      margin-block: .5rem;
      padding: 1rem;
      font-size: 1.4rem;
    }
  }
  .stackBox{
    margin-block: 1rem;
    display: flex;
    flex-wrap: wrap;
    .stack{
      width: 30px;
      height: 30px;
      margin: .5rem .5rem .5rem .5rem;
      background-size: contain;
      background-color: white;
      background-position: center;
      border-radius: 20px;
    }
  }
`;

export default function CardBody({ project }:CardBodyProps) {
  return (
    <Container>
      <div className="textBody">
        <p>
          {project.text}
        </p>
      </div>
      <div className="stackBox">
        {project.stacks.map((stack) => (
          <div className="stack" key={stack} style={{ backgroundImage: `url(/images/library/resized/${stack}.png)` }} />
        ))}
      </div>
    </Container>
  );
}
