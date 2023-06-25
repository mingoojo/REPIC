/* eslint-disable no-console */
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { firebaseService } from '../service/firebaseService';

@singleton()
@Store()
export default class UserInfoUpdateStore {
  // 유저사진 URL
  UserURL = '';

  // 유저소개
  UserIntro:string[] = [];

  // 유저별명
  UserNickName:string[] = [];

  // 유저기술
  UserStacks:string[] = [];

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  Initialization({
    UserURL, UserIntro, UserNickName, UserStacks,
  }:{
    UserURL:string, UserIntro:string[], UserNickName:string[], UserStacks:string[]
  }) {
    this.setUrl(UserURL);
    this.setIntro(UserIntro);
    this.setNickName(UserNickName);
    this.setStacks(UserStacks);
  }

  async UpdateData({ file, uid } :{ file:File, uid:string }) {
    this.setError(false);
    this.setIsPending(true);
    try {
      this.setError(false);
      this.setIsPending(false);
      this.uploadIMG({ file, Uid: uid });
    } catch (error) {
      console.log(error);
      this.setError(true);
      this.setIsPending(false);
    }
  }

  async uploadIMG({ file, Uid } :{ file:File, Uid:string }) {
    await firebaseService.UpdateImg({ file, Uid });
    this.setError(false);
    this.setIsPending(false);
  }

  async downloadIMG({ uid } :{ uid:string }) {
    const data = await firebaseService.getUpdatedImg({ Uid: uid });
    this.setUrl(data);
  }

  @Action()
  setUrl(UserURL:string) {
    this.UserURL = UserURL;
  }

  @Action()
  setIntro(UserIntro:string[]) {
    this.UserIntro = UserIntro;
  }

  @Action()
  setNickName(UserNickName:string[]) {
    this.UserNickName = UserNickName;
  }

  @Action()
  setStacks(UserStacks:string[]) {
    this.UserStacks = UserStacks;
  }

  @Action()
  setError(payload:boolean) {
    this.error = payload;
  }

  @Action()
  setIsPending(payload:boolean) {
    this.isPending = payload;
  }

  // async updateURL({ uid }:{uid:string}) {
  //   this.setIsPending(true);
  //   this.setError(false);
  //   try {
  //     const data = await firebaseService.updateURL({ Uid: uid });
  //     this.setUrl(data);
  //     this.setIsPending(false);
  //     this.setError(false);
  //   } catch (error) {
  //     this.setIsPending(false);
  //     this.setError(true);
  //   }
  // }
}
