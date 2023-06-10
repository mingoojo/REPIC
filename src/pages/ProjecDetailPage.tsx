import { useParams } from 'react-router-dom';
import useFetchGetCollection from '../hooks/useFetchGetCollection';

export default function ProjecDetailPage() {
  const params = useParams();
  const { CollectionDocument } = useFetchGetCollection('projects');
  const detailItems = CollectionDocument.find((document) => (
    document.id === params.id
  ));
  const time = detailItems?.createdTime;

  if (time) {
    const fireBaseTime = new Date(
      time.seconds * 1000 + time.nanoseconds / 1000000,
    );
    console.log(fireBaseTime);
    const date = fireBaseTime.toLocaleDateString('ko-KR');
    const atTime = fireBaseTime.toLocaleTimeString();

    console.log(date, atTime);
  }
  return (
    <div>
      ProjecDetailPage
      <div>
        {detailItems?.id}
      </div>
      <div>
        {detailItems?.title}
      </div>
      <div>
        {detailItems?.text}
      </div>
    </div>
  );
}
