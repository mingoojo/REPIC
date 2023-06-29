import { useDarkMode } from 'usehooks-ts';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Project } from '../../type/types';
import { appAuth } from '../../firebase/config';
import useProjectStore from '../../hooks/useProjectStore';

type ProjectItemBodyProps = {
  project : Project
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
      margin: 1rem;
      white-space: nowrap;
      background-color: ${(props) => props.theme.colors.buttonMain};
      color: ${(props) => props.theme.colors.textMain};
      border: 1px solid ${(props) => props.theme.colors.buttonMain};
      padding: 1rem;
      width: 60px;
      height: 40px;
      img{
        height: 100%;
        margin-right: .3rem;
      }
    }
    button:hover{
      cursor: pointer;
      border: 1px solid ${(props) => props.theme.colors.textMain};
    }
  }
`;

export default function ProjectItemBody({ project }:ProjectItemBodyProps) {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const updateValue = appAuth.currentUser?.uid || '';

  const [, projectStore] = useProjectStore();

  const handleClickLikes = () => {
    if (updateValue === '') {
      // eslint-disable-next-line no-alert
      alert('로그인해주세요');
      navigate('/login');
    } else {
      projectStore.updateItemLikes({
        docId: project.id, updateValue,
      });
    }
  };

  return (
    <Container>
      <div className="body">
        <h1>
          {project.title}
        </h1>
        <p>
          {project.text}
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
          {project.likes.length}
        </button>
      </div>
    </Container>
  );
}
