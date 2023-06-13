import { useEffect } from 'react';
import styled from 'styled-components';
import CommunityTable from '../components/community/CommunityTable';
import Header from '../components/default/Header';
import useFetchCommunityStore from '../hooks/useFetchCommunityStore';

const Container = styled.div``;

export default function CommnuityPage() {
  const { fetchGet } = useFetchCommunityStore();
  useEffect(() => {
    fetchGet();
  }, []);

  return (
    <Container>
      <Header />
      <CommunityTable />
    </Container>
  );
}
