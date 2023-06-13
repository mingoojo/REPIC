import Layout from './components/Layout';
import CommunityPage from './pages/CommunityPage';
import CommunityWritePage from './pages/CommunityWritePage';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import PrivatePage from './pages/PrivatePage';
import SignUpPage from './pages/SignUpPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LogInPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/communities', element: <CommunityPage /> },
      { path: '/communities/write', element: <CommunityWritePage /> },
      // { path: '/communities/:id', element: <CommunityDetailPage /> },
      // { path: '/projects', element: <ProjectListPage /> },
      // { path: '/projects/:id', element: <ProjecDetailPage /> },
      // { path: '/projects/write', element: <ProjectWritePage /> },
      // { path: '/projects/update/:id', element: <ProjectUpdatePage /> },
      { path: '/private/:id', element: <PrivatePage /> },
    ],
  },
];

export default routes;
