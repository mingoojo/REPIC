import { useEffect } from 'react';
import { styled } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import useUserInfoStore from '../../hooks/useUserInfoStore';
import { CommunityItem } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';

type CommunityItemProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
  color: ${(props) => props.theme.colors.textMain};;
  padding: 1rem 0.5rem 1rem 0.5rem;
  &:hover{
    background-color: ${(props) => props.theme.colors.buttonMain};
    h1{
      color: ${(props) => props.theme.colors.primary}
    }
  }

  h1{
    font-size: 1.6rem;
    font-weight: bold;
  }
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 100;
    p{
      font-size: 1.3rem;
      white-space: nowrap;
    }
  }
  .communityTitle{
    margin: 1rem 0rem 0.2rem 0rem
  }
  .communityInfo{
    display: inline-block;
    p{
      display: inline-block;
      margin-right: 2rem;
      font-size: 1.2rem;
    }
    .userName{
      font-weight: 500;
      font-size: 1.2rem;
    }
  }

  .textBox{
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    display: block;
    margin-block: 0.5rem;
    line-height: 1.4;
    width: 100%;
  }
  .like{
    display: flex;
    img{
      margin-right: 0.5rem;
      height: 15px;
    }
  }
  .view{
    display: flex;
    img{
      margin-right: 0.5rem;
      height: 15px;
    }
  }
  .comments{
    display: flex;
    img{
      margin-right: 0.5rem;
      height: 15px;
    }
  }
  .iconbox{
    margin-right: 1rem;
    width: 130px;
  }
`;

export default function CommunitiesItem({ communityItem }:CommunityItemProps) {
  const { date, atTime } = getCreatedTime({ createdTime: communityItem.createdTime });
  const { isDarkMode } = useDarkMode();
  const [{ UserInfo }, userInfoStore] = useUserInfoStore();

  useEffect(() => {
    userInfoStore.readUserInfo({ uid: communityItem.uid });
  }, []);

  return (
    <Container>
      <div className="communityInfo">
        <p className="userName">{UserInfo[0].nickName}</p>
        <p>
          {date}
          {' '}
          {atTime}
        </p>
      </div>
      <div className="communityTitle">
        <h1>{communityItem.title}</h1>
      </div>
      <div className="textLine">
        <p className="textBox">{communityItem.text}</p>
        <div className="iconbox">
          <p className="like">
            {
              isDarkMode ? (
                <img src="/images/icons/like01.png" alt="" />
              ) : (
                <img src="/images/icons/like03.png" alt="" />
              )
            }
            {communityItem.likes.length}
          </p>
          <p className="view">
            {
              isDarkMode ? (
                <img src="/images/icons/more01.png" alt="" />
              ) : (
                <img src="/images/icons/more03.png" alt="" />
              )
            }
            {communityItem.view.length}
          </p>
          <p className="comments">
            {
              isDarkMode ? (
                <img src="/images/icons/user02.png" alt="" />
              ) : (
                <img src="/images/icons/user04.png" alt="" />
              )
            }
            {communityItem.comments.length}
          </p>
        </div>
      </div>
    </Container>
  );
}
