import ModalMenuItem from '../../ui/ModalMenuItem';

type ModalHeaderDefaultProps = {
  OnClick : () => void
}

export default function ModalHeaderDefault({ OnClick }:ModalHeaderDefaultProps) {
  return (
    <>
      <ModalMenuItem label="홈" path="/" onclick={OnClick} />
      <ModalMenuItem label="커뮤니티" path="/communities?page=1&sort=Recent" onclick={OnClick} />
      <ModalMenuItem label="프로젝트" path="/projects?page=1&filter=All" onclick={OnClick} />
    </>
  );
}
