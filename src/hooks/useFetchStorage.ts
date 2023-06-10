import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { appStorage } from '../firebase/config';

export default function useFetchStorage() {
  function downLoadImage(urlPath:string) {
    const [imageUrl, setImageUrl] = useState('');
    const starsRef = ref(appStorage, urlPath);

    // 다운로드
    useEffect(() => {
      getDownloadURL(starsRef)
        .then((url) => {
        // Insert url into an <img> tag to "download"
          console.log(url);
          setImageUrl(url);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return imageUrl;
  }
  return {
    downLoadImage,
  };
}
