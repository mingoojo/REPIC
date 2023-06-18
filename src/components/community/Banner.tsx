import styled from 'styled-components';

const Container = styled.div`
  .communityBanner{
  /* border: 2px solid #222; */
  border-radius: 1rem;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background-image: url('/images/communityImage.jpg');
  background-size: cover ;
  background-position: center;
  h1{
    margin-block: 1rem;
    font-size: 2rem;
  }
  p{
    color: ${(props) => props.theme.colors.backgroundMain};
    font-weight: bold;
  }
}
`;

export default function Banner() {
  return (
    <Container>
      <div className="communityBanner">
        <h1>
          커뮤니티
        </h1>
        <p>
          다양한 사람을 만나고 생각의 폭을 넓혀보세요.
        </p>
      </div>
    </Container>
  );
}
