import Layout from './components/Layout';
import CommunityDetailPage from './page/CommunityDetailPage';
import CommunityPage from './page/CommunityPage';
import CommunityWritePage from './page/CommunityWritePage';
import HomePage from './page/HomePage';
import LogInPage from './page/LogInPage';
import ProjectDetailPage from './page/ProjectDetailPage';
import ProjectPage from './page/ProjectPage';
import ProjectWritePage from './page/ProjectWritePage';
import SettingPage from './page/SettingPage';
import SignUpPage from './page/SignUpPage';
import UserPage from './page/UserPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LogInPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/projects', element: <ProjectPage /> },
      { path: '/projects/:id', element: <ProjectDetailPage /> },
      { path: '/projects/write', element: <ProjectWritePage /> },
      { path: '/communities', element: <CommunityPage /> },
      { path: '/communities/write', element: <CommunityWritePage /> },
      { path: '/communities/:id', element: <CommunityDetailPage /> },
      { path: '/setting/:id', element: <SettingPage /> },
      { path: '/user/:id', element: <UserPage /> },
    ],
  },
];

export default routes;
