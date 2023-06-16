import { styled } from 'styled-components';

const Container = styled.div`
 transition: all 2s;
`;

export default function Loading() {
  return (
    <Container>
      loading
    </Container>
  );
}
