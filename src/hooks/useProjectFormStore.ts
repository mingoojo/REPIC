import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProjectFormStore from '../store/ProjectFormStore';

export default function useProjectFormStore() {
  const projectFormStore = container.resolve(ProjectFormStore);
  return useStore(projectFormStore);
}
