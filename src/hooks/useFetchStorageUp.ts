import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { appStorage } from '../firebase/config';

export default function useFetchStorageUp() {
  function fetchStorageUp(file:File) {
    const metadata = {
      contentType: 'image/jpeg image/jpg image/png',
    };
    const storageRef = ref(appStorage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // 작업진행률가져오기
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      },
    );
    return null;
  }
  return {
    fetchStorageUp,
  };
}
