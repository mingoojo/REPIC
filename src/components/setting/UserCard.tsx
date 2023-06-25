import { styled } from 'styled-components';
import { appAuth } from '../../firebase/config';
import { UserData } from '../../type/types';

type UserCardProps = {
  userInfo : UserData
}

const Container = styled.div`
padding : 1rem;
border-right: 1px solid ${(props) => props.theme.colors.textMain};
width: 36%;
min-height: 80vh;
margin-bottom: 3rem;
text-align: center;
  h1{
    font-size: 3rem;
    font-weight: normal;
  }
  .Thumbnail{
    display: inline-block;
    width: 80px;
    margin-block: 2rem;
    height: 80px;
    border-radius: 5rem;
    background-color: white;
    box-shadow: 1px 1px 3px ${(props) => props.theme.colors.textMain};
    .ThumbnailImg{
      border-radius: 5rem;
      width: 100%;
      padding: 0.2rem;
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export default function UserCard({ userInfo }:UserCardProps) {
  return (
    <Container>
      <h1>
        {userInfo.nickName[userInfo.nickName.length - 1]}
      </h1>
      <div className="Thumbnail">
        {
          userInfo.Initial ? (
            <img src={`${userInfo.thumbnailURL}`} alt="Thumb" className="ThumbnailImg" />
          ) : (
            <img src="/images/icons/default.jpg" alt="ThumbDefault" className="ThumbnailImg" />
          )
        }
      </div>
      <div>
        {userInfo.email}
      </div>
      <div className="stackBox">
        {userInfo.stacks.map((stack) => (
          <div className="stack" key={stack} style={{ backgroundImage: `url(/images/library/resized/${stack}.png)` }} />
        ))}
      </div>
    </Container>
  );
}
