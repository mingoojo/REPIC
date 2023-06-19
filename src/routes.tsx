import Layout from './components/Layout';
import CommunityDetailPage from './pages/CommunityDetailPage';
import CommunityPage from './pages/CommunityPage';
import CommunityWritePage from './pages/CommunityWritePage';
import HomePage from './pages/Homepage';
import LogInPage from './pages/LogInPage';
import MyPage from './pages/MyPage';
import PrivatePage from './pages/PrivatePage';
import PrivateWritePage from './pages/PrivateWritePage';
import ProjectListPage from './pages/ProjectListPage';
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
      { path: '/communities/:id', element: <CommunityDetailPage /> },
      { path: '/projects', element: <ProjectListPage /> },
      // { path: '/projects/:id', element: <ProjecDetailPage /> },
      // { path: '/projects/write', element: <ProjectWritePage /> },
      // { path: '/projects/update/:id', element: <ProjectUpdatePage /> },
      { path: '/private/:id', element: <PrivatePage /> },
      { path: '/private/write/:id', element: <PrivateWritePage /> },
      { path: '/mypage/:id', element: <MyPage /> },
    ],
  },
];

export default routes;
