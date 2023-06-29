import { styled } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import { Project } from '../../type/types';
import getUserInfo from '../../utils/getUserInfo';

type CardAuthProps = {
  project : Project
}

const Container = styled.div`
border-top: 1px solid ${(props) => props.theme.colors.textMain};
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
  .author{
    display: flex;
    align-items: center;
    img{
      border-radius: 15px;
      width: 30px;
      height: 30px;
      margin-right: 1rem;
    }
    h1{
      font-size: 1.2rem;
    }
  }
  .iconbox{
    margin-right: 1rem;
    display: flex;
    .iconitem{
      display: flex;
      margin: 0rem 0.5rem 0rem 0.5rem;
    img{
      margin-right: 0.5rem;
      height: 15px;
    }
    }
  }
`;

export default function CardAuth({ project }: CardAuthProps) {
  const { gotUserInfo } = getUserInfo({ uid: project.uid });
  const { isDarkMode } = useDarkMode();
  if (!gotUserInfo) {
    return null;
  }

  return (
    <Container>
      <div className="author">
        {
          gotUserInfo.Initial ? (
            <img src={`${gotUserInfo.thumbnailURL}`} alt="ThumbNail" className="ThumbnailImg" />
          ) : (
            <img src="/images/icons/default.jpg" alt="ThumbDefault" className="ThumbnailImg" />
          )
        }
        <h1>
          {gotUserInfo.nickName}
        </h1>
      </div>
      {
        isDarkMode ? (
          <div className="iconbox">
            <p className="iconitem">
              <img src="/images/icons/more01.png" alt="" />
              {project.view.length}
            </p>
            <p className="iconitem">
              <img src="/images/icons/user02.png" alt="" />
              {project.comments.length}
            </p>
          </div>
        ) : (
          <div className="iconbox">
            <p className="iconitem">
              <img src="/images/icons/more03.png" alt="" />
              {project.view.length}
            </p>
            <p className="iconitem">
              <img src="/images/icons/user04.png" alt="" />
              {project.comments.length}
            </p>
          </div>
        )
      }
    </Container>
  );
}
