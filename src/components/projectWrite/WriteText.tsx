import { styled } from 'styled-components';
import useProjectFormStore from '../../hooks/useProjectFormStore';

const Container = styled.div`
width: 100%;
  textarea{
    padding: 1rem;
    width: 100%;
    height: 720px;
    margin-block: 1rem;
    resize: none;
    background-color: ${(props) => props.theme.colors.backgroundMain};
    color: ${(props) => props.theme.colors.textMain};
  }
`;

export default function WriteText() {
  const [{ text }, projectFormStore] = useProjectFormStore();
  return (
    <Container>
      <textarea value={text} onChange={(e) => { projectFormStore.changeText(e.target.value); }} required placeholder="내용을 입력해주세요" />
    </Container>
  );
}
