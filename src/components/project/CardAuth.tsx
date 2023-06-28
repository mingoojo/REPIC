import { styled } from 'styled-components';
import { Project } from '../../type/types';
import getUserInfo from '../../utils/getUserInfo';

type CardAuthProps = {
  project : Project
}

const Container = styled.div`
border-top: 1px solid ${(props) => props.theme.colors.textMain};
padding: 1rem;
  div{
    display: flex;
    align-items: center;
    img{
      border-radius: 15px;
      width: 30px;
      height: 30px;
      margin-right: 1rem;
    }
    h1{
      font-size: 1.5rem;
    }
  }
`;

export default function CardAuth({ project }: CardAuthProps) {
  const { gotUserInfo } = getUserInfo({ uid: project.uid });

  if (!gotUserInfo) {
    return null;
  }

  return (
    <Container>
      <div>
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
    </Container>
  );
}
