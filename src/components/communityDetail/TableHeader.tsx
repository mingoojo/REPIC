import { useNavigate } from 'react-router-dom';
import { appAuth } from '../../firebase/config';
import useFetchUpdate from '../../hooks/useFetchUpdate';
import { CommunityDocument } from '../../type/types';

type TableHeaderProps = {
  date : string
  document : CommunityDocument
}

export default function TableHeader({ date, document }:TableHeaderProps) {
  const navigate = useNavigate();
  const updateValue = appAuth.currentUser?.uid || '';
  const { fetchUpdateArray } = useFetchUpdate();
  function handleClickLikes() {
    if (updateValue === '') {
      alert('로그인해주세요');
      navigate('/login');
    } else {
      fetchUpdateArray({
        tranaction: 'community', docId: document.id, updateKey: 'likes', updateValue,
      });
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <td>
            작성일
            {date}
          </td>
          <td>
            {'댓글 수 : '}
            {document.comments.length}
          </td>
          <td>
            {'좋아요 수 : '}
            {document.likes.length}
          </td>
          <td>
            <button type="button" onClick={handleClickLikes}>
              좋아요
            </button>
          </td>
        </tr>
      </thead>
    </table>
  );
}
