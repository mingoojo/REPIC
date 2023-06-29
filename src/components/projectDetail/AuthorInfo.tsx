import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { Project, UserData } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';

type AuthorInfoProps = {
  project : Project
  UserInfo : UserData[]
}

const Container = styled.div`
display: flex;
align-items: center;
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
    h1{
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    p{
      color: ${(props) => props.theme.colors.textSecond};
      font-size: 1.5rem;
    }
  }
`;

export default function AuthorInfo({ project, UserInfo }:AuthorInfoProps) {
  const { date } = getCreatedTime({ createdTime: project.createdTime });
  return (
    <Container className="userInfo">
      <Link to={`/user/${UserInfo[0].uid}?sort=WriteCommunity`}>
        {
          UserInfo[0].Initial ? (
            <div className="userThumbNail" style={{ backgroundImage: `url(${UserInfo[0].thumbnailURL})` }} />
          ) : (
            <div className="userThumbNail" style={{ backgroundImage: 'url(/images/icons/default.jpg)' }} />
          )
        }
      </Link>
      <div className="userPara">
        <h1>
          {UserInfo[0].nickName}
        </h1>
        <p>
          {'작성일 : '}
          {date}
        </p>
      </div>
    </Container>
  );
}
