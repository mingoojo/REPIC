import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import CommunityTable from '../components/community/CommunityTable';
import useFetchCommunityStore from '../hooks/useFetchCommunityStore';
import useCommunityStore from '../hooks/useCommunityStore';
import useForceUpdate from '../hooks/useForceUpdate';
import Banner from '../components/community/Banner';

const Container = styled.div`

`;

export type Radio = 'Recent' | 'View' | 'Likes'

export default function CommnuityPage() {
  const { fetchGet } = useFetchCommunityStore();
  const [, store] = useCommunityStore();
  const [params] = useSearchParams();
  const Page = params.get('page') ?? '';
  const [check, setCheck] = useState<Radio>('Recent');

  useEffect(() => {
    fetchGet();
  }, []);

  useEffect(() => {
    store.DefaultSet();
  }, []);

  const [{ communityItems }] = useCommunityStore();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (check === 'Recent') {
      communityItems.sort((a, b) => Number(
        String(b.createdTime.seconds) + String(b.createdTime.nanoseconds),
      ) - Number(String(a.createdTime.seconds) + String(a.createdTime.nanoseconds)));
    } else if (check === 'View') {
      communityItems.sort((a, b) => b.view.length - a.view.length);
    } else if (check === 'Likes') {
      communityItems.sort((a, b) => b.likes.length - a.likes.length);
    }
    // 강제 렌더링 한번 쳐준다.
    forceUpdate();
  }, [check, communityItems]);

  return (
    <Container>
      <Banner />
      <CommunityTable
        communityItems={communityItems}
        setCheck={setCheck}
        check={check}
        Page={Page}
      />
    </Container>
  );
}
