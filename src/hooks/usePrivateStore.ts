import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import PrivateStore from '../store/PrivateStore';

export default function usePrivateStore() {
  const store = container.resolve(PrivateStore);
  return useStore(store);
}
