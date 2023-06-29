import styled from 'styled-components';
import { Project } from '../../type/types';

type CardBodyProps = {
  project : Project
}

const Container = styled.div`
  .textBody{
    .textBox{
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    display: block;
    width: 100%;
    padding: 1rem;
  }
  }
  .stackBox{
    margin-block: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .stack{
      width: 30px;
      height: 30px;
      margin: .5rem .5rem .5rem .5rem;
      background-size: contain;
      background-color: white;
      background-position: center;
      border-radius: 20px;
    }
    .hidden{
      display: none;
    }
  }
`;

export default function CardBody({ project }:CardBodyProps) {
  return (
    <Container>
      <div className="textBody">
        <p className="textBox">
          {project.text}
        </p>
      </div>
      <div className="stackBox">
        {project.stacks.map((stack, index) => (
          <div className={index >= 4 ? 'hidden' : 'stack'} key={stack} style={{ backgroundImage: `url(/images/library/resized/${stack}.png)` }} />
        ))}
        {
          project.stacks.length >= 5 && <div>...</div>
        }
      </div>
    </Container>
  );
}
