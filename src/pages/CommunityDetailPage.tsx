import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useCommunityStore from '../hooks/useCommunityStore';
import useFetchCommunityStore from '../hooks/useFetchCommunityStore';
import CommnityDetailView from '../components/community-detail/CommnityDetailView';

export default function CommunityDetailPage() {
  const params = useParams();

  const { fetchGet } = useFetchCommunityStore();

  useEffect(() => {
    fetchGet();
  }, []);

  const [{ communityItems }] = useCommunityStore();

  const [communityItem] = communityItems.filter((item) => (
    item.id === params.id
  ));

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
