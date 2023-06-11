import { useNavigate, useParams } from 'react-router-dom';
import useFetchGetCollection from '../hooks/useFetchGetCollection';
import getCreatedTime from '../utils/getCreatedTime';

export default function ProjecDetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { CollectionDocument } = useFetchGetCollection({ transaction: 'projects', paramsId: params.id });
  const [collectionDocument] = CollectionDocument;
  const { date, atTime } = getCreatedTime({ time: collectionDocument.createdTime });

  return (
    <div>
      ProjecDetailPage
      <div>
        {collectionDocument?.id}
      </div>
      <div>
        {collectionDocument?.title}
      </div>
      <div>
        {collectionDocument?.text}
      </div>
      <div>
        {date}
        {atTime}
      </div>
      <button type="button" onClick={() => { navigate(`/projects/update/${collectionDocument.id}`); }}>글수정</button>
    </div>
  );
}
