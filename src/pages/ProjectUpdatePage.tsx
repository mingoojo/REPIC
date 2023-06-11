import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffectOnce } from 'usehooks-ts';
import useFetchEdit from '../hooks/useFetchEdit';
import useFetchGetCollection from '../hooks/useFetchGetCollection';

export default function ProjectUpdatePage() {
  const params = useParams();
  const { CollectionDocument } = useFetchGetCollection({ transaction: 'projects', paramsId: params.id });
  const [collectionDocument] = CollectionDocument;
  const { fetchEdit } = useFetchEdit();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function handleSubmit() {
    window.location.reload();
  }

  useEffectOnce(() => {
    setTitle(collectionDocument.title);
    setText(collectionDocument.text);
  });

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>프로젝트 수정</legend>
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
