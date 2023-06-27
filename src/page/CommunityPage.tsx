import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CommunityView from '../components/community/CommunityView';
import useCommunityStore from '../hooks/useCommunityStore';
import useCommunityQueryStore from '../hooks/useCommunityQueryStore';

export default function CommunityPage() {
  const [params] = useSearchParams();
  const [{ communityItems }, communityStore] = useCommunityStore();
  const [{ searchText, radioValue }, communityQueryStore] = useCommunityQueryStore();

  const Page = params.get('page') ?? '';
  const Sort = params.get('sort') ?? '';
  const Search = params.get('search') ?? '';

  useEffect(() => {
    communityQueryStore.changeRadioValue(Sort);
  }, [Sort]);

  useEffect(() => {
    communityQueryStore.changeSearchText(Search);
  }, [Search, Sort]);

  useEffect(() => {
    communityStore.readCommnuityItemsInfo();
  }, [communityStore]);

  useEffect(() => {
    if (Search === '') {
      communityQueryStore.changeSearchText('');
    }
  }, []);

  if (!communityItems.length) {
    return null;
  }

  return (
    <CommunityView
      radioValue={radioValue}
      communityItems={communityItems}
      Page={Page}
      Search={Search}
      searchText={searchText}
    />
  );
}
