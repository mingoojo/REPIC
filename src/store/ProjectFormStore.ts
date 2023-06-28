import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { firebaseService } from '../service/firebaseService';

@singleton()
@Store()
export default class ProjectFormStore {
  title = '';

  text = '';

  stacks = [] as string[];

  startDate = '';

  endDate = '';

  proceedingMethod = 'proceedingMethod';

  recruit = 'recruit';

  status = true;

  // 에러상태
  error = false;

  // 통신상태
  isPending = false;

  async addDocument() {
    this.setIsPending(true);
    this.setError(false);
    try {
      await firebaseService.addDocument({
        stacks: this.stacks,
        startDate: this.startDate,
        endDate: this.endDate,
        proceedingMethod: this.proceedingMethod,
        recruit: this.recruit,
        status: this.status,
        transaction: 'Projects',
        title: this.title,
        text: this.text,
      });
      this.setIsPending(false);
      this.setError(false);
      this.setDefault();
    } catch (error) {
      this.setIsPending(false);
      this.setError(true);
    }
  }

  @Action()
  setDefault() {
    this.title = '';
    this.text = '';
    this.stacks = [];
    this.startDate = '';
    this.endDate = '';
    this.proceedingMethod = '';
    this.status = true;
    this.recruit = '';
  }

  @Action()
  changeTitle(title:string) {
    this.title = title;
  }

  @Action()
  changeText(text:string) {
    this.text = text;
  }

  @Action()
  changeStacks(stacks:string[]) {
    this.stacks = stacks;
  }

  @Action()
  changeStartDate(startDate:string) {
    this.startDate = startDate;
  }

  @Action()
  changeEndDate(endDate:string) {
    this.endDate = endDate;
  }

  @Action()
  changeProceedingMethod(proceedingMethod:string) {
    this.proceedingMethod = proceedingMethod;
  }

  @Action()
  changeStatus(status:boolean) {
    this.status = status;
  }

  @Action()
  changeRecurte(recruit:string) {
    this.recruit = recruit;
  }

  @Action()
  setError(payload:boolean) {
    this.error = payload;
  }

  @Action()
  setIsPending(payload:boolean) {
    this.isPending = payload;
  }

  get valid() {
    return !!this.title
      && !!this.text
      && this.stacks.length > 0
      && Number(this.endDate.replace(/-/g, '')) - Number(this.endDate.replace(/-/g, '')) >= 0
      && this.proceedingMethod !== 'proceedingMethod'
      && this.recruit !== 'recruit';
  }
}
