import styled from 'styled-components';
import { appAuth } from '../../firebase/config';
import getUserInfo from '../../utils/getUserInfo';

const Container = styled.div`
text-align: center;
position: absolute;
z-index: -1;
left: 50%;
transform: translateX(-50%);
  .card{
    display: inline-block;
    width: 480px;
    padding: 3rem;
    box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
    .box{
      position: relative;
      .top{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50%;
        z-index: -1;

        .profile, .title, .job{
          margin: 5px;
        }
        .profile{
          width: 80px;
          height: 80px;
          border: 4px solid white;
          box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
          border-radius: 45%;
          z-index: -1;
        }
        .title{
          font-size: 18px;
          font-weight: 700;
        }
        .job {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
`;

export default function UserWelcome() {
  const UserInfo = appAuth.currentUser;
  const { gotUserInfo } = getUserInfo({ uid: String(UserInfo?.uid) });

  if (gotUserInfo === undefined) {
    return null;
  }

  return (
    <Container>
      <div className="card">
        <div className="box">
          <div className="top">
            {
              gotUserInfo.Initial ? (
                <img src={`${gotUserInfo.thumbnailURL}`} alt="Thumb" className="profile" />
              ) : (
                <img src="/images/icons/default.jpg" alt="ThumbDefault" className="profile" />
              )
            }
            <h1 className="title">{gotUserInfo.nickName}</h1>
            <h3 className="job">Developer</h3>
            <div className="links">
              <ul>
                <li>{gotUserInfo.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
