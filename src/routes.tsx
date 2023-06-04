import Layout from './layout/Layout';
import HomePage from './pages/Homepage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/login', element: <LogInPage /> },
    ],
  },
];

export default routes;
