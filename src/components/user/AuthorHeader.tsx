import { styled } from 'styled-components';
import { UserData } from '../../type/types';

type AuthorCardProps = {
  UserInfo : UserData
}

const Container = styled.div`
display: flex;
align-items: center;
padding: 1rem;
  .userThumbNail{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-size: contain;
    background-color: white;
    box-shadow: 1px 1px 2px ${(props) => props.theme.colors.textMain};
  }
  .userPara{
    padding: 0rem 2rem 0rem 2rem;
    div{
      h1{
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
    }
    .stackBox{
      display: flex;
      flex-wrap: wrap;
      .stack{
        width: 20px;
        height: 20px;
        margin: .3rem .3rem .3rem .3rem;
        background-size: contain;
        background-color: white;
        background-position: center;
        border-radius: 20px;
      }
    }
  }
`;

export default function AuthorHeader({ UserInfo }:AuthorCardProps) {
  return (
    <Container className="userInfo">
      <div>
        {
          UserInfo.Initial ? (
            <div className="userThumbNail" style={{ backgroundImage: `url(${UserInfo.thumbnailURL})` }} />
          ) : (
            <div className="userThumbNail" style={{ backgroundImage: 'url(/images/icons/default.jpg)' }} />
          )
        }
      </div>
      <div className="userPara">
        <div>
          <h1>
            {UserInfo.nickName}
          </h1>
        </div>
        <div className="stackBox">
          {UserInfo.stacks.map((stack) => (
            <div className="stack" key={stack} style={{ backgroundImage: `url(/images/library/resized/${stack}.png)` }} />
          ))}
        </div>
      </div>
    </Container>
  );
}
