import Layout from './components/Layout';
import CommunityPage from './pages/CommunityPage';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import PrivatePage from './pages/PrivatePage';
import ProjecDetailPage from './pages/ProjecDetailPage';

import ProjectListPage from './pages/ProjectListPage';
import ProjectsWritePage from './pages/ProjectsWritePage';
import SignUpPage from './pages/SignUpPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LogInPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/community', element: <CommunityPage /> },
      { path: '/projects', element: <ProjectListPage /> },
      { path: '/projects/:id', element: <ProjecDetailPage /> },
      { path: '/projects/write', element: <ProjectsWritePage /> },
      { path: '/private', element: <PrivatePage /> },
    ],
  },
];

export default routes;
