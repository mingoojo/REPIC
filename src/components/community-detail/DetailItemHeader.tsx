import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import useFetchThumbStorage from '../../hooks/useFetchThumbStorage';
import usePrivateStore from '../../hooks/usePrivateStore';
import { CommunityItem, nullPrivateData, PrivateData } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';
import HeaderUser from './HeaderUser';

type DetailItemHeaderProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0rem 1rem 2rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
div{
  padding: 0rem 2rem 0rem 2rem;
}
.userInfo{
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
    h1{
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    p{
      color: ${(props) => props.theme.colors.textSecond};
      font-size: 1.5rem;
    }
  }
}
.itemInfo{
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.textSecond};
  font-size: 1.3rem;
  padding: 0;
  div{
    margin: 0px 0px .5rem 0px;
    white-space: nowrap;
  }
}
@media (max-width: 720px){
  flex-direction: column;
  align-items: flex-start;
  .itemInfo{
    margin-top: 3rem;
  }
}
`;

export default function DetailItemHeader({ communityItem }:DetailItemHeaderProps) {
  const { date } = getCreatedTime({ time: communityItem.createdTime });
  const [{ privateItem }] = usePrivateStore();
  const [createdUser, setCreatedUser] = useState<PrivateData[]>([nullPrivateData]);
  const { ThumbsDownload } = useFetchThumbStorage();

  useEffect(() => {
    const filteredUser = privateItem.filter((item) => (
      item.uid === communityItem.uid
    ));
    setCreatedUser(filteredUser);
  }, [privateItem]);

  if (createdUser[0].uid === '') {
    return (
      null
    );
  }

  return (
    <Container className="header">
      <HeaderUser date={date} createdUser={createdUser} />
      <div className="itemInfo">
        <div>
          {'댓글수 : '}
          {communityItem.comments.length}
          개
        </div>
        <div>
          {'좋아요 : '}
          {communityItem.likes.length}
          개
        </div>
        <div>
          {'방문자수 : '}
          {communityItem.view.length}
        </div>
      </div>
    </Container>
  );
}
