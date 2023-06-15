import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useCommunityStore from '../hooks/useCommunityStore';
import useFetchCommunityStore from '../hooks/useFetchCommunityStore';
import CommnityDetailView from '../components/community-detail/CommnityDetailView';

export default function CommunityDetailPage() {
  const params = useParams();

  const { fetchGet } = useFetchCommunityStore();

  useEffect(() => {
    fetchGet(params.id);
  }, []);

  const [{ SelectedcommunityItem }] = useCommunityStore();

  const [communityItem] = SelectedcommunityItem;

  if (!communityItem) {
    return (
      null
    );
  }

  return (
    <div>
      <CommnityDetailView communityItem={communityItem} />
    </div>
  );
}
