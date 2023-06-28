import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { appAuth, timeStamp } from '../../firebase/config';
import useCommentFormStore from '../../hooks/useCommentFormStore';
import { CommunityItem } from '../../type/types';
import Button from '../ui/Button';

type CommentWriteProps = {
  communityItem : CommunityItem[]
}

const Container = styled.div`
margin-top: 2rem;
border: 1px solid ${(props) => props.theme.colors.textMain};
border-radius: .5rem;
padding: 1rem;
  textarea{
    width: 100%;
    height: 70px;
    padding: 1rem;
    resize: none;
    background-color: ${(props) => props.theme.colors.backgroundMain};
    color: ${(props) => props.theme.colors.textMain};
  }
  .buttonBox{
    text-align: end;
    margin-block: 2rem;
    button{
      width: 150px;
    }
  }
`;

export default function CommentWrite({ communityItem }:CommentWriteProps) {
  const [{ comment }, commentFormStore] = useCommentFormStore();
  const navigate = useNavigate();

  const handleClick = () => {
    const uid = appAuth.currentUser?.uid || '';
    const createdTime = timeStamp.fromDate(new Date());
    if (uid === '') {
      // eslint-disable-next-line no-alert
      alert('로그인해주세요');
      navigate('/login');
    } else {
      commentFormStore.updateComment({ docId: communityItem[0].id, uid, createdTime });
    }
  };

  return (
    <Container>
      <div>
        <textarea placeholder="댓글 작성" value={comment} onChange={(e) => { commentFormStore.changeComment(e.target.value); }} cols={10} rows={10} />
      </div>
      <div className="buttonBox">
        <Button label="작성하기" onClick={handleClick} />
      </div>
    </Container>
  );
}
