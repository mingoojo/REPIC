import ModalMenuItem from '../../ui/ModalMenuItem';

type HeaderLogOutPrpos ={
  OnClick: () => void
}

export default function ModalHeaderLogOut({ OnClick } : HeaderLogOutPrpos) {
  return (
    <>
      <ModalMenuItem label="가입하기" path="/signup" onclick={OnClick} />
      <ModalMenuItem label="로그인" path="/login" onclick={OnClick} />
    </>
  );
}
