import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import UserInfoStore from '../store/UserInfoStore';

export default function useUserInfoStore() {
  const userInfoStore = container.resolve(UserInfoStore);
  return useStore(userInfoStore);
}
