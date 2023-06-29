import { useParams } from 'react-router-dom';
import getProjectItem from '../utils/getProjectItem';
import ProjectDetailView from '../components/projectDetail/ProjectDetailView';

export default function ProjectDetailPage() {
  const params = useParams();
  const { gotProjectItem } = getProjectItem({ DocId: String(params.id) });

  if (!gotProjectItem) {
    return null;
  }

  return (
    <ProjectDetailView project={gotProjectItem} />
  );
}
