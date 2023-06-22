import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import FireBaseConnectionStore from '../store/FireBaseConnectionStore';

export default function useFireBaseConnectionStore() {
  const store = container.resolve(FireBaseConnectionStore);
  return useStore(store);
}
