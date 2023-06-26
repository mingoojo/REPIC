import Layout from './components/Layout';
import CommunityPage from './page/CommunityPage';
import CommunityWritePage from './page/CommunityWritePage';
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
      { path: '/communities', element: <CommunityPage /> },
      { path: '/communities/write', element: <CommunityWritePage /> },
      { path: '/setting/:id', element: <SettingPage /> },
    ],
  },
];

export default routes;
