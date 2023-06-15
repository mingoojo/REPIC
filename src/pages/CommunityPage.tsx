import { useEffect } from 'react';
import styled from 'styled-components';
import CommunityTable from '../components/community/CommunityTable';
import useFetchCommunityStore from '../hooks/useFetchCommunityStore';
import FooterField from '../components/community/FooterField';
import useCommunityStore from '../hooks/useCommunityStore';

const Container = styled.div``;

export default function CommnuityPage() {
  const { fetchGet } = useFetchCommunityStore();
  const [, store] = useCommunityStore();
  useEffect(() => {
    fetchGet();
  }, []);

  useEffect(() => {
    store.DefaultSet();
  }, []);

  return (
    <Container>
      <CommunityTable />
      <FooterField />
    </Container>
  );
}
