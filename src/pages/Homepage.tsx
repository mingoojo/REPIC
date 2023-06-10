import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryForm from '../components/homepage/DiaryForm';
import DiaryList from '../components/homepage/DiaryList';
import ImageUpLoad from '../components/homepage/ImageUpLoad';
import { appAuth } from '../firebase/config';
import useFetchGetCollection from '../hooks/useFetchGetCollection';
import getTransAction from '../utils/getTransAction';

export default function HomePage() {
  const { transaction } = getTransAction();
  const { currentUser } = appAuth;

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser]);

  const { CollectionDocument } = useFetchGetCollection(`Private__${transaction}`);
  return (
    <div>
      <div>
        home Page
        <DiaryForm />
      </div>
      {
        CollectionDocument.map((document) => (
          <DiaryList key={document.id} document={document} transaction={transaction} />
        ))
      }
      <ImageUpLoad />
    </div>
  );
}
