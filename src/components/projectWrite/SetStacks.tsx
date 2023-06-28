import { styled } from 'styled-components';
import { allStacks } from '../../type/types';
import StackItem from '../ui/StackItem';
import useProjectFormStore from '../../hooks/useProjectFormStore';

const Container = styled.div`
  .stackBox{
    .front, .back, .global{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;

export default function setStacks() {
  const [{ stacks }, projectFormStore] = useProjectFormStore();
  const handleStackState = (value : string) => {
    console.log(value);
    if (!stacks.includes(value)) {
      const inputData = [...stacks, value];
      projectFormStore.changeStacks(inputData);
    } else if (stacks.includes(value)) {
      const inputData = stacks.filter((stack) => (stack !== value));
      projectFormStore.changeStacks(inputData);
    }
  };
  return (
    <Container>
      프로젝트 사용 기술
      <div className="stackBox">
        <div className="front">
          {
            allStacks.map((stack) => (
              <StackItem
                key={stack}
                label={stack}
                onChange={handleStackState}
                UserStacks={stacks}
              />
            ))
          }
        </div>
      </div>
    </Container>
  );
}
