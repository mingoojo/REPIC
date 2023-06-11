import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/default/Header';
import DiaryForm from '../components/private/DiaryForm';
import DiaryList from '../components/private/DiaryList';
import ImageUpLoad from '../components/private/ImageUpLoad';
import { appAuth } from '../firebase/config';
import useFetchGetCollection from '../hooks/useFetchGetCollection';
import getTransAction from '../utils/getTransAction';

export default function PrivatePage() {
  const { transaction } = getTransAction();
  const { currentUser } = appAuth;

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser]);

  const { CollectionDocument } = useFetchGetCollection({ transaction: `Private__${transaction}` });
  return (
    <div>
      <Header />
      <div>
        PublicPage
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
