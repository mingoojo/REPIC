import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/default/Header';
import useFetchPrivateStore from '../hooks/useFetchPrivateStore';
import usePrivateStore from '../hooks/usePrivateStore';

const Container = styled.div`
  
`;

export default function PrivatePage() {
  const params = useParams();
  const { fetchGet } = useFetchPrivateStore();
  const [{ privateItem }] = usePrivateStore();
  const myPrivateData = privateItem.filter((Item) => (
    Item.uid === params.id
  ));
  console.log(myPrivateData);
  useEffect(() => {
    fetchGet();
  }, []);
  return (
    <Container>
      <Header />
      <div>
        privatePage
      </div>
    </Container>
  );
}
