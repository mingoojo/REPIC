import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import useLogOutStore from '../../hooks/useLogOutStore';

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

export default function LogOutButton() {
  const [, LogOutStore] = useLogOutStore();
  const navigate = useNavigate();
  const handleLogout = async () => {
    LogOutStore.logout();
    navigate('/login');
  };
  return (
    <ButtonItem className="logout" type="button" onClick={handleLogout}>로그아웃</ButtonItem>
  );
}
