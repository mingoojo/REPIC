import { singleton } from 'tsyringe';
import BaseStore, { Action } from './BaseStore';

const initialState = {
  UserInfo: '',
};

export type State = typeof initialState

export function getUserInfo(payload:string) {
  return { type: 'LOGIN', payload };
}
export function logoutUser(payload = '') {
  return { type: 'LOGOUT', payload };
}

function reducer(state:State, action:Action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state, UserInfo: action.payload,
    };
  case 'LOGOUT':
    return {
      ...state, UserInfo: '',
    };
  default:
    return state;
  }
}

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducer);
  }
}
