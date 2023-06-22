import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import useLogOutStore from '../../hooks/useLogOutStore';

const Button = styled.button`
cursor: pointer;
margin-left: 1.5rem;
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
    <Button className="logout" type="button" onClick={handleLogout}>로그아웃</Button>
  );
}
