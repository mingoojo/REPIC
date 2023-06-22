import { styled } from 'styled-components';
import LogOutButton from '../../ui/LogOutButton';
import ModalMenuItem from '../../ui/ModalMenuItem';

type HeaderLogInProps = {
  OnClick: () => void,
  userId : string
}

const Container = styled.div`
  padding-block: 2rem;
  button{
    padding: 1rem 4rem 1rem 4rem;
  }
`;

export default function ModalHeaderLogIn({ OnClick, userId }:HeaderLogInProps) {
  return (
    <>
      <ModalMenuItem label="정보수정" path={`/setting/${userId}`} onclick={OnClick} />
      <ModalMenuItem label="마이페이지" path={`/mypage/${userId}`} onclick={OnClick} />
      <Container>
        <LogOutButton />
      </Container>
    </>
  );
}
