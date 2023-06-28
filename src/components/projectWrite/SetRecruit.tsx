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

export default function SetRecruit() {
  const [{ recruit }, projectFormStore] = useProjectFormStore();

  const handleChangeRecrute = (e:React.ChangeEvent<HTMLSelectElement>) => {
    projectFormStore.changeRecurte(e.target.value);
  };

  return (
    <Container className="selectBox">
      <p>모집인원</p>
      <select value={recruit} onChange={handleChangeRecrute}>
        <option value="recrute">선택해주세요</option>
        <option value="기획">기획</option>
        <option value="디자인">디자인</option>
        <option value="프론트엔드">프론트엔드</option>
        <option value="백앤드">백앤드</option>
      </select>
    </Container>
  );
}
