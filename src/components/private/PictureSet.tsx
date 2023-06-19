import { useState } from 'react';
import useFetchThumbStorage from '../../hooks/useFetchThumbStorage';
import { PrivateData } from '../../type/types';

type PictureSetProps = {
  MyPrivateData: PrivateData
}

export default function PictureSet({ MyPrivateData }:PictureSetProps) {
  const { ThumbsUpload } = useFetchThumbStorage();
  const [inputedImage, setInputedImage] = useState<File>({} as File);
  const handleUpload = () => {
    if (inputedImage.name) {
      ThumbsUpload({ file: inputedImage, userInfo: MyPrivateData.uid });
    }
  };
  const items = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setInputedImage(e.target.files[0]);
    }
  };
  return (
    <div>
      <h2>
        사진변경
      </h2>
      <input type="file" onChange={items} id="photo" />
      <button className="imageSubmit" type="button" onClick={handleUpload}>사진변경</button>
    </div>
  );
}
