import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';

@singleton()
@Store()
export default class ProjectQueryStore {
  searchText = '';

  radioValue = '';

  @Action()
  changeSearchText(searchText: string) {
    this.searchText = searchText;
  }

  @Action()
  changeRadioValue(radioValue: string) {
    this.radioValue = radioValue;
  }
}
