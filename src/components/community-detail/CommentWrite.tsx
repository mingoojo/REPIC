import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { appAuth, timeStamp } from '../../firebase/config';
import { CommunityItem } from '../../type/types';
import useFetchCommunityStore from '../../hooks/useFetchCommunityStore';

type CommentWriteProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
margin-top: 2rem;
  textarea{
    width: 100%;
    height: 70px;
    padding: 1rem;
    resize: none;
  }
  .buttonBox{
    text-align: end;
    margin-block: 2rem;
    button{
      padding: 1.5rem 5rem 1.5rem 5rem;
      border-radius: 1rem;
      background-color: ${(props) => props.theme.colors.primary};
      color: white;
      border: none
    }
  }
`;

export default function CommentWrite({ communityItem }:CommentWriteProps) {
  const uid = appAuth.currentUser?.uid || '';
  const createdTime = timeStamp.fromDate(new Date());
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const { fetchUpdateCommunityComments } = useFetchCommunityStore();

  const updateValue = {
    uid,
    text: comment,
    likes: [],
    createdTime,
  };

  const handleClickComment = () => {
    if (updateValue.uid === '') {
      // eslint-disable-next-line no-alert
      alert('로그인해주세요');
      navigate('/login');
    } else {
      fetchUpdateCommunityComments({
        tranaction: 'community', docId: communityItem.id, updateKey: 'comments', updateValue,
      });
      setComment('');
    }
  };

  return (
    <Container>
      <div>
        <textarea placeholder="댓글 작성" value={comment} onChange={(e) => { setComment(e.target.value); }} cols={10} rows={10} />
      </div>
      <div className="buttonBox">
        <button type="button" onClick={handleClickComment}>작성하기</button>
      </div>
    </Container>
  );
}
