import { styled } from 'styled-components';
import useProjectFormStore from '../../hooks/useProjectFormStore';

const Container = styled.div`
width: 100%;
  select{
    width: 100%;
    margin-block: 1rem;
    padding: 1rem;
    height: 4rem;
    background-color: ${(props) => props.theme.colors.backgroundMain};
    border: 1px solid ${(props) => props.theme.colors.textSecond};
    color: ${(props) => props.theme.colors.textMain};
  }
`;

export default function SetMethod() {
  const [{ proceedingMethod }, projectFormStore] = useProjectFormStore();

  const handleChangeMethod = (e:React.ChangeEvent<HTMLSelectElement>) => {
    projectFormStore.changeProceedingMethod(e.target.value);
  };

  return (
    <Container className="selectBox">
      <p>진행방식</p>
      <select value={proceedingMethod} onChange={handleChangeMethod}>
        <option value="proceedingMethod">선택해주세요</option>
        <option value="온라인">온라인</option>
        <option value="오프라인">오프라인</option>
      </select>
    </Container>
  );
}
