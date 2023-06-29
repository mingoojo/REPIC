import { styled } from 'styled-components';
import { Project } from '../../type/types';

type InfoBoxProps = {
  project? : Project
  label : string
  value? : string
  type : string
}

const Container = styled.div`
width: 50%;
display: flex;
align-items: flex-end;
margin-block: .8rem;
h1{
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: 2rem;
}
.stackBox{
    margin-top: 2rem;
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

export default function InfoBox({
  project = undefined, label, value = '', type,
}:InfoBoxProps) {
  if (type === 'status' && project !== undefined) {
    return (
      <Container className="defaultBox">
        <h1>
          모집상태
        </h1>
        {
          project.status ? (
            <p>모집중</p>
          ) : (
            <p>모집종료</p>
          )
        }
      </Container>
    );
  }

  if (type === 'stacks' && project !== undefined) {
    return (
      <Container className="defaultBox">
        <div>
          <h1>
            사용스택
          </h1>
          <div className="stackBox">
            {project.stacks.map((stack) => (
              <div className="stack" key={stack} style={{ backgroundImage: `url(/images/library/resized/${stack}.png)` }} />
            ))}
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="defaultBox">
      <h1>
        {label}
      </h1>
      <p>
        {value}
      </p>
    </Container>
  );
}
