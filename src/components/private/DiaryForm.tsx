import useFetchStore from '../../hooks/useFetchStore';
import getTransAction from '../../utils/getTransAction';

export default function DiaryForm() {
  const { transaction, uid } = getTransAction();

  const {
    AddDocument, title, setTitle, text, setText,
  } = useFetchStore(`Private__${transaction}`);

  function handleSubmit(e:React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (uid) {
      AddDocument();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>일기쓰기</legend>
        <label>
          일기제목
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} required />
        </label>
        <label>
          일기내용
          <textarea required value={text} onChange={(e) => { setText(e.target.value); }} />
        </label>
        <button type="submit">저장하기</button>
      </fieldset>
    </form>
  );
}
