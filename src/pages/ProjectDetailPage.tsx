import { useParams } from 'react-router-dom';

export default function ProjectDetailPage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      ProjectDetailPage
    </div>
  );
}
