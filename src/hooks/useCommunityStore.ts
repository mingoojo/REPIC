import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import CommunityStore from '../store/CommunityStore';

export default function useCommunityStore() {
  const store = container.resolve(CommunityStore);
  return useStore(store);
}
