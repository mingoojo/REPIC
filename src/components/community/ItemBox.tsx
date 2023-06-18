import { useEffect } from 'react';
import styled from 'styled-components';
import usePrivateStore from '../../hooks/usePrivateStore';
import { CommunityItem } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';

type ItmeBoxProps = {
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
    width: 70%;
  }
`;

export default function ItemBox({ communityItem }:ItmeBoxProps) {
  const { date, atTime } = getCreatedTime({ time: communityItem.createdTime });
  const [{ privateItem }, store] = usePrivateStore();
  useEffect(() => {
    store.fetchGetPrivate();
  }, [store]);
  const UserAuth = privateItem.filter((privateitem) => (
    privateitem.uid === communityItem.uid
  ));
  if (!UserAuth[0]) {
    return null;
  }
  return (
    <Container>
      <div className="communityInfo">
        <p className="userName">{UserAuth[0].nickName[UserAuth[0].nickName.length - 1]}</p>
        <p>
          {date}
          {' '}
          {atTime}
        </p>
      </div>
      <div className="communityTitle">
        <h1>{communityItem.title}</h1>
      </div>
      <div>
        <p className="textBox">{communityItem.text}</p>
        <p>
          {'likes : '}
          {communityItem.likes.length}
        </p>
        <p>
          {'view : '}
          {communityItem.view.length}
        </p>
        <p>
          {'comments : '}
          {communityItem.comments.length}
        </p>
      </div>
    </Container>
  );
}
