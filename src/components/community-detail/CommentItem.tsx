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
border: 1px solid #222;
height: 10rem;
padding: 1rem;
border-radius: 2rem;
`;

export default function CommentItem({ comment }:CommentItemProps) {
  const { date } = getCreatedTime({ time: comment.createdTime });
  const [userinfo, setUserinfo] = useState(nullPrivateData);
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
  console.log(userinfo);

  if (!userinfo) {
    return null;
  }

  return (
    <Container>
      <div>
        <Link to={`/private/${userinfo.uid}`}>
          {userinfo.nickName}
        </Link>
      </div>
      <div>
        {comment.text}
      </div>
      <div>
        {date}
      </div>
    </Container>
  );
}
