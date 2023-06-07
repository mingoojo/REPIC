import { User } from 'firebase/auth';
import React, { useState } from 'react';
import { appAuth } from '../../firebase/config';
import useFirestore from '../../hooks/useFireStore';

export default function DiaryForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { uid } = appAuth.currentUser as User;
  const { addDocument } = useFirestore('writenCollection');

  function handleTitle(e:React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  function handleText(e:React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function handleSubmit(e:React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (uid) {
      addDocument({ uid, title, text });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>일기쓰기</legend>
        <label>
          일기제목
          <input type="text" value={title} onChange={handleTitle} required />
        </label>
        <label>
          일기내용
          <textarea required value={text} onChange={handleText} />
        </label>
        <button type="submit">저장하기</button>
      </fieldset>
    </form>
  );
}
