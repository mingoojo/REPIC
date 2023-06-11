import Layout from './components/Layout';
import CommunityPage from './pages/CommunityPage';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import PrivatePage from './pages/PrivatePage';
import ProjecDetailPage from './pages/ProjecDetailPage';

import ProjectListPage from './pages/ProjectListPage';
import ProjectUpdatePage from './pages/ProjectUpdatePage';
import SignUpPage from './pages/SignUpPage';
import ProjectWritePage from './pages/ProjectWritePage';
import CommunityWritePage from './pages/CommunityWritePage';
import CommunityDetailPage from './pages/CommunityDetailPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LogInPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/communities', element: <CommunityPage /> },
      { path: '/communities/write', element: <CommunityWritePage /> },
      { path: '/communities/:id', element: <CommunityDetailPage /> },
      { path: '/projects', element: <ProjectListPage /> },
      { path: '/projects/:id', element: <ProjecDetailPage /> },
      { path: '/projects/write', element: <ProjectWritePage /> },
      { path: '/projects/update/:id', element: <ProjectUpdatePage /> },
      { path: '/private', element: <PrivatePage /> },
    ],
  },
];

export default routes;
