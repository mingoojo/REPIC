import { styled } from 'styled-components';
import SignUpContent from './SignUpContent';
import SignUpForm from './SignUpForm';

const Container = styled.div`
  padding-bottom: 80px;
`;

export default function SignUpView() {
  return (
    <Container>
      <SignUpContent />
      <SignUpForm />
    </Container>
  );
}
