import DiaryForm from '../components/homepage/DiaryForm';
import DiaryList from '../components/homepage/DiaryList';
import useFetchGetCollection from '../hooks/useFetchGetCollection';
import getTransAction from '../utils/getTransAction';

export default function HomePage() {
  const { transaction } = getTransAction();

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

    </div>
  );
}
