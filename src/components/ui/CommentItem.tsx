import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Comment } from '../../type/types';
import getUserInfo from '../../utils/getUserInfo';
import getCreatedTime from '../../utils/getCreatedTime';

type CommentItemProps = {
  comment : Comment
}

const Container = styled.div`
margin-top: 1rem;
border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
padding: 1rem;
margin-bottom: 1rem;
  div{
    display: flex;
    align-items: center;
    margin-bottom: .5rem;
    ul{
      font-size: 1.5rem;
      display: flex;
      margin-bottom: .5rem;
      li{
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
      margin-right: 2rem;
      font-family: 'Noto Sans CJK KR';
      font-weight: bold;
    }
  }
  .comentTextBox{
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.textMain};
  }
`;

export default function CommentItem({ comment }:CommentItemProps) {
  const { gotUserInfo } = getUserInfo({ uid: comment.uid });
  const { date } = getCreatedTime({ createdTime: comment.createdTime });
  if (!gotUserInfo) {
    return null;
  }

  return (
    <Container>
      <div>
        <ul>
          <li>
            <Link to={`/user/${gotUserInfo.uid}?sort=WriteCommunity`}>
              {gotUserInfo.nickName}
            </Link>
          </li>
          <li className="date">
            {date}
          </li>
        </ul>
      </div>
      <div className="comentTextBox">
        <p>
          {comment.text}
        </p>
      </div>
    </Container>
  );
}
