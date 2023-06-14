import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CommunityItem } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';
import { appAuth } from '../../firebase/config';
import useFetchCommunityStore from '../../hooks/useFetchCommunityStore';

type DetailItemViewProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
margin-top: 2rem;
h1{
  font-size: 2rem;
}
.header{
  display: flex;
  div{
    margin:  2rem 2rem 1rem 0rem;
  }
}
.body{
  width: 100%;
  border: 1px solid #222;
  margin-block: 1rem;
  height: 750px;
  padding: 2rem;
  border-radius: 2rem;
  word-break: break-all;
}
`;

export default function DetailItemView({ communityItem }:DetailItemViewProps) {
  const navigate = useNavigate();

  const { fetchUpdateCommunityLikes } = useFetchCommunityStore();
  const { date } = getCreatedTime({ time: communityItem.createdTime });

  const updateValue = appAuth.currentUser?.uid || '';

  const handleClickLikes = () => {
    if (updateValue === '') {
      // eslint-disable-next-line no-alert
      alert('로그인해주세요');
      navigate('/login');
    } else {
      fetchUpdateCommunityLikes({
        tranaction: 'community', docId: communityItem.id, updateKey: 'likes', updateValue,
      });
    }
  };
  return (
    <Container>
      <div>
        <h1>{communityItem.title}</h1>
      </div>
      <div className="header">
        <div>
          {'작성일 : '}
          {date}
        </div>
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
      </div>
      <div className="body">
        {communityItem.text}
      </div>
      <div>
        <button type="button" onClick={handleClickLikes}>
          Likes
          {communityItem.likes.length}
        </button>
      </div>
    </Container>
  );
}
