import { useParams } from 'react-router-dom';

export default function MyPage() {
  const params = useParams();

  console.log(params);
  return (
    <div>
      MyPage
    </div>
  );
}
