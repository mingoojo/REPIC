/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, User,
} from 'firebase/auth';
import {
  addDoc, arrayRemove, arrayUnion, collection, doc, onSnapshot, updateDoc,
} from 'firebase/firestore';
import {
  getDownloadURL, getStorage, ref, uploadBytesResumable,
} from 'firebase/storage';
import { container } from 'tsyringe';
import {
  appAuth, appFireStore, db, timeStamp,
} from '../firebase/config';
import UserInfoUpdateStore from '../store/UserInfoUpdateStore';
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

  userInfoUpdateStore = container.resolve(UserInfoUpdateStore);

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

  // 정보 업데이트 어레이 : 삭제
  async delDocumentFieldArray({
    tranaction, docId, updateKey, updateValue,
  }:{tranaction:string, docId:string, updateKey:string, updateValue:string}):Promise<void> {
    const uid = this.AppAuth.currentUser?.uid || '';
    const Ref = doc(appFireStore, tranaction, docId);
    await updateDoc(Ref, {
      [updateKey]: arrayRemove(updateValue),
    });
  }

  // 정보 업데이트 일반
  async updateDocumentField({
    tranaction, docId, updateKey, updateValue,
  }:{tranaction:string, docId:string, updateKey:string, updateValue:string}):Promise<void> {
    const uid = this.AppAuth.currentUser?.uid || '';
    const Ref = doc(db, tranaction, docId);
    await updateDoc(Ref, {
      [updateKey]: updateValue,
    });
  }

  // 정보 업데이트 어레이 : 작성
  async writeDocumentFieldArray({
    tranaction, docId, updateKey, updateValue,
  }:{tranaction:string, docId:string, updateKey:string, updateValue:string}):Promise<void> {
    const uid = this.AppAuth.currentUser?.uid || '';
    const Ref = doc(appFireStore, tranaction, docId);
    await updateDoc(Ref, {
      [updateKey]: arrayUnion(updateValue),
    });
  }

  // 글작성
  async addDocument({
    email, nickName, transaction, text, title,
  }:addDocumentProps):Promise<void> {
    const createdTime = timeStamp.fromDate(new Date());
    const uid = this.AppAuth.currentUser?.uid || '';
    const colRef = collection(appFireStore, transaction);
    const defaultURL = `https://firebasestorage.googleapis.com/v0/b/repic---communityproject.appspot.com/o/images%2FuserThumbs%2F${uid}?alt=media`;

    // 유저정보 작성
    const UserDoc = {
      uid,
      email,
      nickName,
      introduce: defaultIntroduce,
      stacks: defaultStacks,
      thumbnailURL: defaultURL,
      Initial: false,
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

  // 글 수정
  async updateDocument({
    transaction, docId, field, value,
  }:{
    transaction:string, docId:string, field:string, value:string}) {
    const CurrentUser = this.AppAuth.currentUser;
    const Ref = doc(db, transaction, docId);

    await updateDoc(Ref, {
      [field]: value,
    });
  }

  // 사진 업로드
  async UpdateImg({ file, Uid, docId }:{ file:File, Uid: string, docId:string}):Promise<void> {
    console.log(file);
    const uid = this.AppAuth.currentUser?.uid || '';
    const storage = getStorage();
    console.log(uid);
    const metadata = { contentType: 'image/jpeg' };
    const storageRef = ref(storage, `images/userThumbs/${uid}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    const InitialRef = doc(db, 'Users', docId);

    await uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        if (progress === 100) {
          updateDoc(InitialRef, {
            Initial: true,
          });
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }

  // 사진 URL불러오기
  async getUpdatedImg({ Uid }:{Uid:string}):Promise<string> {
    const uid = this.AppAuth.currentUser?.uid || '';

    const storage = getStorage();
    const starsRef = ref(storage, `images/userThumbs/${Uid}`);
    const data = await getDownloadURL(starsRef);
    return data;
  }
}

export const firebaseService = new FirebaseService();
