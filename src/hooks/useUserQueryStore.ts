import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import UserQueryStore from '../store/UserQueryStore';

export default function useUserQueryStore() {
  const userQueryStore = container.resolve(UserQueryStore);
  return useStore(userQueryStore);
}
