import { useParams } from 'react-router-dom';
import CommunityDetailTable from '../components/communityDetail/CommunityDetailTable';
import Header from '../components/default/Header';
import useFetchGetCollection from '../hooks/useFetchGetCollection';

export default function CommunityDetailPage() {
  const params = useParams();
  const { CollectionDocument } = useFetchGetCollection({ transaction: 'community', paramsId: params.id });
  const [document] = CollectionDocument;
  return (
    <div>
      <Header />
      <CommunityDetailTable document={document} />
    </div>
  );
}
