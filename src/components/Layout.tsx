import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './default/Header';

const ContainerLayout = styled.div`
max-width: 760px;
margin: auto;
padding: 0 1.5rem 0 1.5rem;
margin-top: 3rem;
`;

export default function Layout() {
  return (
    <div>
      <Header />
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
    </div>
  );
}
