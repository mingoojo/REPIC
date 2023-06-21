import styled from 'styled-components';
import LogInContent from './LogInContent';
import LogInForm from './LogInForm';

const Container = styled.div`
  padding-bottom: 80px;
`;

export default function LogInView() {
  return (
    <Container>
      <LogInContent />
      <LogInForm />
    </Container>
  );
}
