import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import WriteTitle from './WriteTitle';
import WriteText from './WriteText';
import SetMethod from './SetMethod';
import SetRecruit from './SetRecruit';
import SetDeadline from './SetDeadline';
import useProjectFormStore from '../../hooks/useProjectFormStore';
import SetStacks from './SetStacks';
import Button from '../ui/Button';

const Container = styled.div`
margin-top: 3rem;
form{
  width: 100%
}
div{
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
}
`;

export default function ProjectWriteForm() {
  const [{ valid }, projectFormStore] = useProjectFormStore();
  const navigate = useNavigate();
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    projectFormStore.addDocument().then(() => {
      navigate('/projects');
    });
  };
  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>프로젝트 작성</h1>
          <WriteTitle />
          <SetMethod />
          <SetRecruit />
          <SetDeadline />
          <SetStacks />
          <WriteText />
          <Button label="게시하기" type="submit" disable={valid} />
        </form>
      </div>
    </Container>
  );
}
