import { styled } from 'styled-components';

const Container = styled.div`
width: 62%;
float: right;
padding-block: 1rem;
@media (max-width: 720px) {
  width: 100%;
}
`;

export default function UserActivity() {
  return (
    <Container>
      UserActivity
    </Container>
  );
}
