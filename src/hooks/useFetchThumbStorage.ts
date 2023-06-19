/* eslint-disable no-console */
/* eslint-disable no-alert */
import {
  getDownloadURL, getStorage, ref, uploadBytesResumable,
} from 'firebase/storage';
import { useState } from 'react';

export default function useFetchThumbStorage() {
  const [Url, setUrl] = useState('');

  // 이미지 스토리지에 저장
  function ThumbsUpload({ file, userInfo }:{ file:File, userInfo:string }) {
    const storage = getStorage();
    const metadata = {
      contentType: 'image/jpeg',
    };
    const storageRef = ref(storage, `images/userThumbs/${userInfo}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        if (progress === 100) {
          window.location.reload();
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }

  // 이미지 다운받기
  function ThumbsDownload({ userInfo }:{userInfo:string}) {
    // Create a reference to the file we want to download
    const storage = getStorage();
    const starsRef = ref(storage, `images/userThumbs/${userInfo}`);

    // Get the download URL
    getDownloadURL(starsRef)
      .then((url) => {
        if (url) {
          setUrl(url);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    ThumbsUpload, ThumbsDownload, Url,
  };
}
