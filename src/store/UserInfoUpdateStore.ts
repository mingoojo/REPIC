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
  UserIntro = '';

  // 유저별명
  UserNickName = '';

  // 유저스택
  UserStacks:string[] = [];

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  // 초기화
  Initialization({
    UserURL, UserIntro, UserNickName, UserStacks,
  }:{
    UserURL:string, UserIntro:string, UserNickName:string, UserStacks:string[]
  }) {
    this.setUrl(UserURL);
    this.setIntro(UserIntro);
    this.setNickName(UserNickName);
    this.setStacks(UserStacks);
  }

  // 유저 정보 업데이트:삭제
  async delDocumentField({
    tranaction, docId, updateKey, updateValue,
  }:{tranaction:string, docId:string, updateKey:string, updateValue:string}) {
    await firebaseService.delDocumentFieldArray({
      tranaction, docId, updateKey, updateValue,
    });
    this.setError(false);
    this.setIsPending(false);
  }

  // 유저 정보 업데이트:작성
  async writeDocumentField({
    tranaction, docId, updateKey, updateValue,
  }:{tranaction:string, docId:string, updateKey:string, updateValue:string}) {
    await firebaseService.writeDocumentFieldArray({
      tranaction, docId, updateKey, updateValue,
    });
    this.setError(false);
    this.setIsPending(false);
  }

  // 유저 정보 업데이트 닉네임, 자기소개
  async updateDocumentField({
    tranaction, docId, updateKey, updateValue,
  }:{tranaction:string, docId:string, updateKey:string, updateValue:string}) {
    await firebaseService.updateDocumentField({
      tranaction, docId, updateKey, updateValue,
    });
    this.setError(false);
    this.setIsPending(false);
  }

  // 유저 사진 업로드
  async uploadIMG({ file, Uid, docId } :{ file:File, Uid:string, docId:string }) {
    await firebaseService.UpdateImg({ file, Uid, docId });
    this.setError(false);
    this.setIsPending(false);
  }

  // 유저 사진 다운로드
  async downloadIMG({ uid } :{ uid:string }) {
    const data = await firebaseService.getUpdatedImg({ Uid: uid });
    this.setUrl(data);
  }

  @Action()
  setUrl(UserURL:string) {
    this.UserURL = UserURL;
  }

  @Action()
  setIntro(UserIntro:string) {
    this.UserIntro = UserIntro;
  }

  @Action()
  setNickName(UserNickName:string) {
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
}
