import { Route, Routes } from 'react-router-dom';
import Header from '../components/default/Header';
import HomePage from '../pages/Homepage';
import LogInPage from '../pages/LogInPage';
import SignUpPage from '../pages/SignUpPage';
import ContainerDiv from '../style/default/layoutStyle';

export default function Layout() {
  return (
    <ContainerDiv>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
      <footer>footer</footer>
    </ContainerDiv>
  );
}
