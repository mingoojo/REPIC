import { useParams } from 'react-router-dom';
import Header from '../components/default/Header';

export default function CommunityDetailPage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <Header />
      CommunityDetailPage
    </div>
  );
}
