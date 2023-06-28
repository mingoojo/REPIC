import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Button from '../ui/Button';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-block: 1.5rem;
  .clone{
    visibility: hidden;
  }
  .ButtonBox{
    text-align: center;
    button{
      width: 100px;
      margin: auto;
    }
  }
`;

export default function ProjectFooterField() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects/write');
  };
  return (
    <Container>
      <div className="ButtonBox clone">
        <Button label="글작성" type="submit" onClick={handleClick} />
      </div>
      <div className="ButtonBox">
        <Button label="글작성" type="submit" onClick={handleClick} />
      </div>
    </Container>
  );
}
