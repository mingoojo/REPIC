import { styled } from 'styled-components';
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
  }
`;

export default function WriteTitle() {
  const [{ title }, projectFormStore] = useProjectFormStore();
  return (
    <Container>
      <input type="text" value={title} onChange={(e) => { projectFormStore.changeTitle(e.target.value); }} required placeholder="제목을 입력해주세요" />
    </Container>
  );
}
