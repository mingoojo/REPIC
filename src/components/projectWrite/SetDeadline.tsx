import { styled } from 'styled-components';
import { useEffect } from 'react';
import useProjectFormStore from '../../hooks/useProjectFormStore';

const Container = styled.div`
width: 100%;
  input{
    width: 100%;
    margin-block: 1rem;
    padding: 1rem;
    height: 4rem;
    background-color: ${(props) => props.theme.colors.backgroundMain};
    border: 1px solid ${(props) => props.theme.colors.textSecond};
    color: ${(props) => props.theme.colors.textMain};
    color-scheme: ${(props) => props.theme.colors.scheme};;
  }
`;

export default function SetDeadline() {
  const [, projectFormStore] = useProjectFormStore();
  const handleStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    projectFormStore.changeStartDate(e.target.value);
  };
  const handleEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    projectFormStore.changeEndDate(e.target.value);
  };

  return (
    <Container>
      <label htmlFor="start">시작일</label>
      <input type="date" id="start" name="trip-start" onChange={handleStartDate} />
      <label htmlFor="start">종료일</label>
      <input type="date" id="start" name="trip-start" onChange={handleEndDate} />
    </Container>
  );
}
