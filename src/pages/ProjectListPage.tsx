import { Link } from 'react-router-dom';
import Header from '../components/default/Header';
import ProjectsTable from '../components/projects/ProjectsTable';
import useFetchGetCollection from '../hooks/useFetchGetCollection';

export default function ProjectListPage() {
  const { CollectionDocument } = useFetchGetCollection('projects');
  return (
    <div>
      <Header />
      <ProjectsTable />
      {
        CollectionDocument.map((document) => (
          <ul key={document.id}>
            <Link to={`/projects/${document.id}`}>{document.title}</Link>
          </ul>
        ))
      }
    </div>
  );
}
