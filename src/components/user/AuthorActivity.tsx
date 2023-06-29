import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import useUserQueryStore from '../../hooks/useUserQueryStore';

type AuthorActivityProps = {
  userId: string
}

const Container = styled.div`
margin-top: 2rem;
height: 50px;
line-height: 50px;
padding: 0rem 1rem 0rem 1rem;
border-top: 1px solid ${(props) => props.theme.colors.textSecond};
 a{
  text-decoration: none;
  color: ${(props) => props.theme.colors.textMain};
  margin: 0rem 1rem 0rem 1rem;
  padding-block: 11px;
 }
 a:hover{
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
 }
 .active{
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
 }
`;

export default function AuthorActivity({ userId }:AuthorActivityProps) {
  const [{ radioValue }] = useUserQueryStore();
  return (
    <Container>
      <Link className={`${radioValue === 'WriteCommunity' && 'active'}`} to={`/user/${userId}?sort=WriteCommunity`}>커뮤니티</Link>
      <Link className={`${radioValue === 'WriteProject' && 'active'}`} to={`/user/${userId}?sort=WriteProject`}>프로젝트</Link>
    </Container>
  );
}
