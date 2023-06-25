import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import UserInfoUpdateStore from '../store/UserInfoUpdateStore';

export default function useUserInfoUpdateStore() {
  const userInfoUpdateStore = container.resolve(UserInfoUpdateStore);
  return useStore(userInfoUpdateStore);
}
