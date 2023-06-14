import styled from 'styled-components';
import { CommunityItem } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';

type ItmeBoxProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
  width: 100%;
  border: 1px solid #222;
  padding: 0.5rem;

  h1{
    font-size: 2rem;
    font-weight: bold;
  }
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    width: 80%;
  }
`;

export default function ItemBox({ communityItem }:ItmeBoxProps) {
  const { date } = getCreatedTime({ time: communityItem.createdTime });
  return (
    <Container>
      <h1>{communityItem.title}</h1>
      <div>
        <p className="textBox">{communityItem.text}</p>
        <p>{date}</p>
      </div>
    </Container>
  );
}
