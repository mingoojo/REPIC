import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

const ButtonItem = styled.button`
cursor: pointer;
padding: 1rem;
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

export default function BackButton() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <ButtonItem className="darkMode" type="button" onClick={handleBack}>뒤로가기</ButtonItem>
  );
}
