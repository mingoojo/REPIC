import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';

@singleton()
@Store()
export default class UserQueryStore {
  radioValue = '';

  @Action()
  changeRadioValue(radioValue: string) {
    this.radioValue = radioValue;
  }
}
