import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
width:49%;
min-height: 80vh;
display: flex;
align-items: center;
div{
    .communityPara{
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

export default function CommunitySide() {
  return (
    <Container>
      <div>
        <p className="communityPara">
          Communicate
          {' '}
          <br />
          {' '}
          with
          people
        </p>
        <Link to="/communities?page=1&sort=Recent">
          <p>
            Community Page
          </p>
        </Link>
      </div>
    </Container>
  );
}
