import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
width:49%;
min-height: 80vh;
display: flex;
align-items: center;
justify-content: end;
text-align: end;
div{
    /* border: 2px solid #222; */
    .projectPara{
      margin-bottom: 1rem;
      font-size: 3rem;
      line-height: 4rem;
      font-weight: bold;
    }
    a{
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary};
      font-size: 2rem;
    }
  }
`;

export default function ProjectSide() {
  return (
    <Container>
      <div>
        <p className="projectPara">
          Do Something
          {' '}
          <br />
          {' '}
          Incredible Now
        </p>
        <Link to="/projects?page=1&filter=All">
          <p>
            Project Page
          </p>
        </Link>
      </div>
    </Container>
  );
}
