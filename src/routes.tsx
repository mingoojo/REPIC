import Layout from './components/Layout';
import HomePage from './page/HomePage';
import LogInPage from './page/LogInPage';
import ProjectPage from './page/ProjectPage';
import SettingPage from './page/SettingPage';
import SignUpPage from './page/SignUpPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LogInPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/projects', element: <ProjectPage /> },
      { path: '/setting/:id', element: <SettingPage /> },
    ],
  },
];

export default routes;
