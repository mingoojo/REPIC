import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/default/Header';
import UserWriteBody from '../components/private-write/UserWriteBody';
import useFetchPrivateStore from '../hooks/useFetchPrivateStore';
import usePrivateStore from '../hooks/usePrivateStore';

const Container = styled.div`
  
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
      <Container>
        <Header />
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <UserWriteBody myPrivateData={myPrivateData} />
    </Container>
  );
}
