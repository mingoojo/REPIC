import styled from 'styled-components';

const Container = styled.div`
  .ProjectBanner{
  border-radius: 1rem;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background-image: url('/images/ProjectBanner3.jpg');
  background-size: cover ;
  background-position: center;
  background-color: black;
  }
  .ProjectHeader{
    margin-bottom: 1rem;
    h1{
      margin-block: 1rem;
      font-size: 2rem;
      font-weight: bold;
    }
    p{
      color: ${(props) => props.theme.colors.textSecond};
      font-weight: bold;
    }
  }
`;

export default function ProjectBanner() {
  return (
    <Container>
      <div className="ProjectHeader">
        <h1>
          [
          PROJECT
          ]
        </h1>
        <p>
          다양한 사람과 팀을 이루고 프로젝트를 진행해보세요
        </p>
      </div>
      <div className="ProjectBanner" />
    </Container>
  );
}
