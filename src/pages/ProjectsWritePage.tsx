import { useNavigate } from 'react-router-dom';
import useFetchStore from '../hooks/useFetchStore';

export default function ProjectsWritePage() {
  const navigate = useNavigate();
  const {
    AddDocument, title, setTitle, text, setText,
  } = useFetchStore('projects');

  function handleSubmit(e:React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    AddDocument();
    navigate('/projects');
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>프로젝트 작성</legend>
        <label>
          제목
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} required />
        </label>
        <label>
          내용
          <textarea required value={text} onChange={(e) => { setText(e.target.value); }} />
        </label>
        <button type="submit">게시하기</button>
      </fieldset>
    </form>
  );
}
