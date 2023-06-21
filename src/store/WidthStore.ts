import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { nullWidth } from '../type/types';

@singleton()
@Store()
export default class WidthStore {
  width : number = nullWidth;

  @Action()
  setWidth(width : number) {
    this.width = width;
  }
}
