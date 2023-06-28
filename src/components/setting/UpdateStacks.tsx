import { styled } from 'styled-components';
import useUserInfoUpdateStore from '../../hooks/useUserInfoUpdateStore';
import { backEndStacks, frontEndStacks, globalStacks } from '../../type/types';
import StackItem from '../ui/StackItem';

const Container = styled.div`
  h1{
    font-size: 1.5rem;
    font-weight: normal;
    margin-block: 2rem;
  }
  .stackBox{
    .front, .back, .global{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;

export default function UpdateStacks() {
  const [{ UserStacks }, userInfoUpdateStore] = useUserInfoUpdateStore();
  const handleStackState = (value : string) => {
    if (!UserStacks.includes(value)) {
      const inputData = [...UserStacks, value];
      userInfoUpdateStore.setStacks(inputData);
    } else if (UserStacks.includes(value)) {
      const inputData = UserStacks.filter((stack) => (stack !== value));
      userInfoUpdateStore.setStacks(inputData);
    }
  };
  return (
    <Container>
      <h1>
        사용가능한 기술
      </h1>
      <div className="stackBox">
        <div className="front">
          {
            frontEndStacks.map((stack) => (
              <StackItem
                key={stack}
                label={stack}
                onChange={handleStackState}
                UserStacks={UserStacks}
              />
            ))
          }
        </div>
        <div className="back">
          {
            backEndStacks.map((stack) => (
              <StackItem
                key={stack}
                label={stack}
                onChange={handleStackState}
                UserStacks={UserStacks}
              />
            ))
          }
        </div>
        <div className="global">
          {
            globalStacks.map((stack) => (
              <StackItem
                key={stack}
                label={stack}
                onChange={handleStackState}
                UserStacks={UserStacks}
              />
            ))
          }
        </div>
      </div>
    </Container>
  );
}
