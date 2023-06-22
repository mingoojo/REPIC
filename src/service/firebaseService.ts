/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, User,
} from 'firebase/auth';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import {
  getDownloadURL, getStorage, ref, uploadBytesResumable,
} from 'firebase/storage';
import { appAuth, appFireStore, timeStamp } from '../firebase/config';
import {
  defaultComments, defaultIntroduce, defaultLikes, defaultStacks,
  defaultThumbNail, defaultView, UserData,
} from '../type/types';

type addDocumentProps = {
  transaction: string,
  email?: string,
  nickName?: string,
  text?:string,
  title?:string,
}

export default class FirebaseService {
  AppAuth = appAuth;

  // 로그인 기능
  async login({ email, password }:{email:string, password:string}):Promise<void> {
    await signInWithEmailAndPassword(this.AppAuth, email, password);
  }

  // 로그아웃 기능
  async logout():Promise<void> {
    await signOut(this.AppAuth);
  }

  // 가입하기 기능
  async signup({
    email, password, displayName,
  }: {email:string, password:string, displayName:string}):Promise<void> {
    await createUserWithEmailAndPassword(this.AppAuth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        if (!user) { throw new Error('실패'); }
        updateProfile(this.AppAuth.currentUser as User, { displayName });
      });
  }

  // 글작성
  async addDocument({
    email, nickName, transaction, text, title,
  }:addDocumentProps):Promise<void> {
    const createdTime = timeStamp.fromDate(new Date());
    const uid = this.AppAuth.currentUser?.uid || '';
    const colRef = collection(appFireStore, transaction);

    // 유저정보 작성
    const UserDoc = {
      uid,
      email,
      nickName: [nickName],
      introduce: defaultIntroduce,
      stacks: defaultStacks,
      thumbnailURL: defaultThumbNail,
    };

    // 커뮤니티 글 작성
    const CommnuityDoc = {
      comments: defaultComments,
      createdTime,
      likes: defaultLikes,
      text,
      title,
      uid,
      view: defaultView,
    };

    if (transaction === 'Users') {
      await addDoc(colRef, UserDoc);
    } else if (transaction === 'Communities') {
      await addDoc(colRef, CommnuityDoc);
    }
  }

  // 사진 업로드
  // async ThumbsUpload({ file }:{ file:File}) {
  //   const storage = getStorage();
  //   const uid = this.AppAuth.currentUser?.uid || '';
  //   const metadata = { contentType: 'image/jpeg' };
  //   const storageRef = ref(storage, `images/userThumbs/${uid}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file, metadata);
  //   await uploadTask.on(
  //     'state_changed',
  //     (snapshot) => {
  //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log(`Upload is ${progress}% done`);
  //       if (progress === 100) { window.location.reload(); }
  //     },
  //   );
  // }

  // 사진 URL불러오기
  // async ThumbsDownload():Promise<string> {
  //   const storage = getStorage();
  //   const uid = this.AppAuth.currentUser?.uid || '';
  //   console.log(uid);
  //   const starsRef = ref(storage, `images/userThumbs/${uid}`);
  //   const imageUrl = await getDownloadURL(starsRef);
  //   const data = imageUrl;
  //   return data;
  // }
}

export const firebaseService = new FirebaseService();
