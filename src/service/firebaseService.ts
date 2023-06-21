import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { appAuth } from '../firebase/config';

export default class FirebaseService {
  AppAuth = appAuth;

  // 로그인 기능
  async login({ email, password }:{email:string, password:string}):Promise<User> {
    const { user } = await signInWithEmailAndPassword(this.AppAuth, email, password);
    return user;
  }
}

export const firebaseService = new FirebaseService();
