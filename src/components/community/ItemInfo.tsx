import { styled } from 'styled-components';
import { CommunityItem, UserData } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';

type ItemInfoProps={
  communityItem:CommunityItem
  UserInfo: UserData[]
}

const Container = styled.div`
display: flex;
  p{
    margin-right: 2rem;
    font-size: 1.2rem;
  }
  .userName{
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export default function ItemInfo({ communityItem, UserInfo }:ItemInfoProps) {
  const { date, atTime } = getCreatedTime({ createdTime: communityItem.createdTime });
  return (
    <Container>
      <p className="userName">{UserInfo[0].nickName}</p>
      <p>
        {date}
        {' '}
        {atTime}
      </p>
    </Container>
  );
}
