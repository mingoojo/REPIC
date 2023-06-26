import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CommunityView from '../components/community/CommunityView';
import useCommunityStore from '../hooks/useCommunityStore';

export type Radio = 'Recent' | 'View' | 'Likes'

export default function CommunityPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [{ communityItems }, communityStore] = useCommunityStore();

  const [radioValue, setRadioValue] = useState<Radio>('Recent');

  const Page = params.get('page') ?? '';
  const sort = params.get('sort') ?? '';

  useEffect(() => {
    navigate(`/communities?page=1&sort=${radioValue}`);
  }, [radioValue]);

  useEffect(() => {
    communityStore.readCommnuityItemsInfo();
  }, [communityStore]);

  if (!communityItems.length) {
    return null;
  }

  return (
    <CommunityView
      radioValue={radioValue}
      setRadioValue={setRadioValue}
      communityItems={communityItems}
    />
  );
}
