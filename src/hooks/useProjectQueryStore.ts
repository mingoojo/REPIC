import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProjectQueryStore from '../store/ProjectQueryStore';

export default function useProjectQueryStore() {
  const projectQueryStore = container.resolve(ProjectQueryStore);
  return useStore(projectQueryStore);
}
