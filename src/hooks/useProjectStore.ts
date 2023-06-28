import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProjectStore from '../store/ProjectsStore';

export default function useProjectStore() {
  const projectStore = container.resolve(ProjectStore);
  return useStore(projectStore);
}
