import { styled } from 'styled-components';
import BackButton from '../ui/BackButton';

const Container = styled.div`
margin-block: 1rem;
text-align: end;
`;

export default function CommentButtonField() {
  return (
    <Container>
      <BackButton />
    </Container>
  );
}
