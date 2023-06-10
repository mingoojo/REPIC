import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
ul{
  display: flex;
  justify-content: space-between;
}
input[type="radio"]:checked + label{
  color: red;
}
input[type="radio"] + label{
  margin-left: 1rem;
}
input[type="radio"]{
  display: none;
}
`;

export default function ProjectNav() {
  const navigate = useNavigate();
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <input type="radio" name="table" defaultChecked id="radio1" />
            <label className="RadioButton" htmlFor="radio1">
              최신순
            </label>
            <input type="radio" name="table" id="radio2" />
            <label className="RadioButton" htmlFor="radio2">
              좋아요순
            </label>
            <input type="radio" name="table" id="radio3" />
            <label className="RadioButton" htmlFor="radio3">
              조회순
            </label>
          </li>
          <li>
            <button type="button" onClick={() => { navigate('/projects/write'); }}>글쓰기</button>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
