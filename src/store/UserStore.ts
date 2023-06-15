/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, User,
} from 'firebase/auth';
import { doc } from 'firebase/firestore';
import { container, singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { appAuth, appFireStore } from '../firebase/config';
import { Column, fetchUpdateCommunityProp } from '../type/types';
import PrivateStore from './PrivateStore';

@singleton()
@Store()
export default class UserStore {
  privateStore = container.resolve(PrivateStore);

  // 현재 로그인한 유저 없다면 빈값
  user = {} as User;

  // 파이어베이스와의 통신상태
  isAuthReady = false;

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  @Action()
  setUser(payload:User) {
    this.user = payload;
  }

  @Action()
  setIsAuthReady(payload:boolean) {
    this.isAuthReady = payload;
  }

  @Action()
  setError(payload:boolean) {
    this.error = payload;
  }

  @Action()
  setIsPending(payload:boolean) {
    this.isPending = payload;
  }

  // 로그인 기능
  login({ email, password }:{email:string, password:string}) {
    this.setError(false); // 아직 에러가 없으니 null 입니다.
    this.setIsPending(true); // 통신중이므로 true입니다.

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        this.setError(false);
        this.setIsPending(false);
        // 회원 정보를 정상적으로 받지 못하면 실패입니다.
        this.setUser(user);
        if (!user) {
          throw new Error('로그인에 실패했습니다.');
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((Error) => {
        this.setError(true);
        this.setIsPending(false);
      });
  }

  // 로그아웃기능
  logout() {
    signOut(appAuth).then(() => {
      this.setError(false);
      this.setIsPending(false);
      this.setUser({} as User);
      // 로그아웃 성공!
    });
  }

  // 가입하기 기능
  signup({
    email, password, displayName,
  }: {email:string, password:string, displayName:string}) {
    this.setError(false);
    this.setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        if (!user) {
          throw new Error('실패');
        }
        updateProfile(appAuth.currentUser as User, { displayName })
          .then(() => {
            this.setUser(user);
            this.setError(false);
            this.setIsPending(false);
            this.privateStore.addDocument({ email, nickName: displayName });
          }).catch((Error) => {
            this.setError(true);
            this.setIsPending(false);
          });
      })
      .catch((Error) => {
        this.setError(true);
        this.setIsPending(false);
      });
  }
}
