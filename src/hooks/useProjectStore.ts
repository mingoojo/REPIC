import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProjectStore from '../store/ProjectStore';

export default function useProjectStore() {
  const store = container.resolve(ProjectStore);
  return useStore(store);
}
