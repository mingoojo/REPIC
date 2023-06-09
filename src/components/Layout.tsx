import { Outlet } from 'react-router-dom';
import Footer from './default/Footer';
import Header from './default/Header';

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
