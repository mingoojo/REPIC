import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import UserWriteBody from '../components/private-write/UserWriteBody';
import useFetchPrivateStore from '../hooks/useFetchPrivateStore';
import usePrivateStore from '../hooks/usePrivateStore';

const Container = styled.div`
  min-height: 90vh;
  padding: 0 1rem 0 1rem;
`;

export default function PrivateWritePage() {
  const params = useParams();
  const { fetchGet } = useFetchPrivateStore();
  const [{ privateItem }] = usePrivateStore();
  const myPrivateData = privateItem.filter((Item) => (
    Item.uid === params.id
  ));
  useEffect(() => {
    fetchGet();
  }, []);

  if (!myPrivateData.length) {
    return (
      null
    );
  }

  return (
    <Container>
      <UserWriteBody myPrivateData={myPrivateData} />
    </Container>
  );
}
