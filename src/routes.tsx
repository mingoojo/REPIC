import Layout from './components/Layout';
import HomePage from './page/HomePage';
import LogInPage from './page/LogInPage';
import SignUpPage from './page/SignUpPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LogInPage /> },
      { path: '/signup', element: <SignUpPage /> },
    ],
  },
];

export default routes;
