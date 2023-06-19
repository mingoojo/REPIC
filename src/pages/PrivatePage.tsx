import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import UserBody from '../components/private/UserBody';
import useFetchPrivateStore from '../hooks/useFetchPrivateStore';
import usePrivateStore from '../hooks/usePrivateStore';

const Container = styled.div`
  padding: 0 1rem 0 1rem;
`;

export default function PrivatePage() {
  const params = useParams();
  const { fetchGetPrivate } = useFetchPrivateStore();
  const [{ privateItem }] = usePrivateStore();
  const myPrivateData = privateItem.filter((Item) => (
    Item.uid === params.id
  ));
  useEffect(() => {
    fetchGetPrivate();
  }, []);

  if (!myPrivateData.length) {
    return (
      null
    );
  }

  return (
    <Container>
      <UserBody myPrivateData={myPrivateData} />
    </Container>
  );
}
