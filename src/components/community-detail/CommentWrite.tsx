import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appAuth, timeStamp } from '../../firebase/config';
import { CommunityItem } from '../../type/types';
import useFetchCommunityStore from '../../hooks/useFetchCommunityStore';

type CommentWriteProps = {
  communityItem : CommunityItem
}

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
    <div>
      CommentWrite
      <label>
        <input type="textarea" value={comment} onChange={(e) => { setComment(e.target.value); }} />
      </label>
      <button type="button" onClick={handleClickComment}>글쓰기</button>
    </div>
  );
}
