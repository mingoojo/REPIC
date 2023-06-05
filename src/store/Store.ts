import { singleton } from 'tsyringe';
import BaseStore, { Action } from './BaseStore';

// const dispatch = useDispatch();

const initialState = {
  UserInfo: '',
  isAuthReady: false,
};

export type State = typeof initialState

export function getUserInfo(payload:string) {
  return { type: 'LOGIN', payload };
}
export function logoutUser(payload = '') {
  return { type: 'LOGOUT', payload };
}

export function authReadyUser(payload:string) {
  return { type: 'ISAUTHREADY', payload };
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
  case 'ISAUTHREADY':
    return {
      ...state, UserInfo: action.payload, isAuthReady: true,
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
