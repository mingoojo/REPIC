import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LogInPage /> },
    ],
  },
];

export default routes;
