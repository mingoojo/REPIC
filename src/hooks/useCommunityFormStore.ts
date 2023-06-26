import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import CommunityFormStore from '../store/CommunityFormStore';

export default function useCommunityFormStore() {
  const communityFormStore = container.resolve(CommunityFormStore);
  return useStore(communityFormStore);
}
