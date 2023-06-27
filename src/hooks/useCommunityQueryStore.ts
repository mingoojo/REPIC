import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import CommunityQueryStore from '../store/CommunityQueryStore';

export default function useCommunityQueryStore() {
  const communityQueryStore = container.resolve(CommunityQueryStore);
  return useStore(communityQueryStore);
}
