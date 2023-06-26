import styled from 'styled-components';

const Container = styled.div`
  .communityBanner{
  border-radius: 1rem;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background-image: url('/images/CommunityBanner.jpg');
  background-size: cover ;
  background-position: center;
  background-color: black;
  }
  .communityHeader{
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

export default function CommunityBanner() {
  return (
    <Container>
      <div className="communityHeader">
        <h1>
          [
          COMMUNITY
          ]
        </h1>
        <p>
          다양한 사람을 만나고 생각의 폭을 넓혀보세요.
        </p>
      </div>
      <div className="communityBanner" />
    </Container>
  );
}
