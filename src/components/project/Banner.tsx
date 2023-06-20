import styled from 'styled-components';

const Container = styled.div`
  .projectBanner{
  /* border: 2px solid #222; */
  border-radius: 1rem;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background-image: url('/images/projectImage2.jpg');
  background-size: cover ;
  background-position: center;
  background-color: black;
  }
  .projectHeader{
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

export default function Banner() {
  return (
    <Container>
      <div className="projectHeader">
        <h1>
          [
          PROJECT
          ]
        </h1>
        <p>
          다른 사람들과 팀을 꾸리고 프로젝트를 진행해보세요.
        </p>
      </div>
      <div className="projectBanner" />
    </Container>
  );
}
