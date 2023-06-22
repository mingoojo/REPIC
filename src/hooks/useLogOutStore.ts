import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import LogOutStore from '../store/LogOutStore';

export default function useLogOutStore() {
  const logOutStore = container.resolve(LogOutStore);
  return useStore(logOutStore);
}
