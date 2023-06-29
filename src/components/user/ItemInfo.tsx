import { styled } from 'styled-components';
import { Project, UserData } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';

type ItemInfoProps = {
  projectItem : Project
  UserInfo : UserData[]
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

export default function ItemInfo({ projectItem, UserInfo }:ItemInfoProps) {
  const { date, atTime } = getCreatedTime({ createdTime: projectItem.createdTime });
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
