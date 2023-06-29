import { styled } from 'styled-components';

type MoreViewButtonProps = {
  infinityNumber : number
  setInfinityNumber : (infinityNumber : number) => void
}

const ButtonItem = styled.button`
cursor: pointer;
padding: 1rem;
width: 100%;
font-weight: bold;
background-color: ${(props) => props.theme.colors.backgroundMain};
border: 1px solid ${(props) => props.theme.colors.textMain};
color: ${(props) => props.theme.colors.textMain};
border-radius: .4rem;
white-space: nowrap;
  &:hover{
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.backgroundMain};
  }
`;

export default function MoreViewButton({ infinityNumber, setInfinityNumber }:MoreViewButtonProps) {
  const handleDarkMode = () => {
    setInfinityNumber(infinityNumber + 1);
  };
  return (
    <ButtonItem className="moreView" type="button" onClick={handleDarkMode}>더보기</ButtonItem>
  );
}
