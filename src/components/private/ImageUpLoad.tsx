import React, { useState } from 'react';
import useFetchStorageUp from '../../hooks/useFetchStorageUp';

export default function ImageUpLoad() {
  const [imageData, setImageData] = useState({} as File);
  const { fetchStorageUp } = useFetchStorageUp();
  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setImageData(e.target.files[0]);
    }
  }

  function submit() {
    fetchStorageUp(imageData);
  }
  return (
    <div>
      <label>
        {' '}
        이미지 업로드
        <input
          type="file"
          accept="image/jpg, image/png, image/jpeg"
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={submit}>test</button>
    </div>
  );
}
