import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from '../components/mypage/UserCard';
import useFetchCommunityStore from '../hooks/useFetchCommunityStore';
import useFetchPrivateStore from '../hooks/useFetchPrivateStore';

export default function MyPage() {
  const params = useParams();
  const { fetchGetPrivate } = useFetchPrivateStore();
  const { fetchGetCommunity } = useFetchCommunityStore();

  useEffect(() => {
    fetchGetPrivate();
    fetchGetCommunity();
  }, []);

  if (!params.id) {
    return null;
  }

  return (
    <div>
      <UserCard params={params.id} />
    </div>
  );
}
