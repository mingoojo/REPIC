import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import usePrivateStore from '../../hooks/usePrivateStore';
import { Comment, nullPrivateData, PrivateData } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';

type CommentItemProps = {
  comment : Comment
}

const Container = styled.div`
font-size: 2rem;
margin-top: 1rem;
border-top: 1px solid ${(props) => props.theme.colors.textMain};
padding: 1rem;

div{
  display: flex;
  align-items: center;
  margin-bottom: .5rem;
  ul{
    font-size: 1.5rem;
    display: flex;
    margin-bottom: .5rem;
    .date{
      color: ${(props) => props.theme.colors.textSecond};
    }
  }
  p{
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.textMain};
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 2rem;
    font-family: 'Noto Sans CJK KR';
    font-weight: normal;
  }
  .thumbNail{
    height: 40px;
    border-radius: 20px;
    border: 1px solid ${(props) => props.theme.colors.textMain};
    background-color: white;
  }
}
`;

export default function CommentItem({ comment }:CommentItemProps) {
  const { date } = getCreatedTime({ time: comment.createdTime });
  const [userinfo, setUserinfo] = useState<PrivateData>(nullPrivateData);
  const [{ privateItem }] = usePrivateStore();

  useEffect(() => {
    const userData = privateItem.filter((privater) => (
      privater.uid === comment.uid
    ));
    const [Data] = userData;
    if (!Data) {
      setUserinfo(nullPrivateData);
    } else if (Data) {
      setUserinfo(Data);
    }
  }, [privateItem]);

  if (!userinfo) {
    return null;
  }

  return (
    <Container>
      <div>
        <ul>
          <Link to={`/mypage/${userinfo.uid}`}>
            <li>
              {userinfo.nickName[userinfo.nickName.length - 1]}
            </li>
          </Link>
          <li className="date">
            {date}
          </li>
        </ul>
      </div>
      <div>
        <p>
          {comment.text}
        </p>
      </div>
    </Container>
  );
}
