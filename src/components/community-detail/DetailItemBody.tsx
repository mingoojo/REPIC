import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import { appAuth } from '../../firebase/config';
import useFetchCommunityStore from '../../hooks/useFetchCommunityStore';
import { CommunityItem } from '../../type/types';

type DetailItemBodyProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
.body{
  width: 100%;
  margin-block: 1rem;
  min-height: 500px;
  padding: 2rem;
  word-break: break-all;
  border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
  h1{
    font-weight: bold;
    font-size: 2rem;
    font-family: 'GmarketSansMedium';
    letter-spacing: 1px;
    margin-bottom: 2rem;
  }
  p{
    font-family: 'Noto Sans CJK KR';
    font-weight: 100;
    line-height: 2rem;
    letter-spacing: .6px;
  }
}
.buttonBox{
  text-align: end;
  button{
    border-radius: 1rem;
    border: none;
    background-color: ${(props) => props.theme.colors.buttonMain};
    color: ${(props) => props.theme.colors.textMain};
    padding: 1rem;
    width: 60px;
    height: 40px;
    img{
      height: 100%;
      margin-right: .3rem;
    }
  }
}
`;

export default function DetailItemBody({ communityItem }:DetailItemBodyProps) {
  const navigate = useNavigate();

  const { fetchUpdateCommunityLikes } = useFetchCommunityStore();

  const { isDarkMode } = useDarkMode();

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
      <div className="body">
        <h1>
          {communityItem.title}
        </h1>
        <p>
          {communityItem.text}
        </p>
      </div>
      <div className="buttonBox">
        <button type="button" onClick={handleClickLikes}>
          {
            isDarkMode ? (
              <img src="/images/icons/like02.png" alt="" />
            ) : (
              <img src="/images/icons/like04.png" alt="" />
            )
          }
          {communityItem.likes.length}
        </button>
      </div>
    </Container>
  );
}
