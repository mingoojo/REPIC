import DiaryForm from '../components/HomePage/DiaryForm';
import DiaryList from '../components/HomePage/DiaryList';
import useGetCollection from '../hooks/useGetCollection';

export default function HomePage() {
  const gets = useGetCollection('writenCollection').documents || [];
  // eslint-disable-next-line no-console
  console.log(gets);
  return (
    <main>
      <aside>
        <DiaryForm />
      </aside>
      <ul>
        {
          gets.map((document:any) => (
            <DiaryList key={document.id} document={document} />
          ))
        }
      </ul>
    </main>
  );
}
