import { container } from 'tsyringe';
import ProjectStore from '../store/ProjectStore';

export default function useFetchProjectStore() {
  const store = container.resolve(ProjectStore);
  const title = 'title';
  const text = 'text';
  const stacks = ['react'];
  const timeline = ['timeline'];

  const fetchAddDoc = () => {
    store.addDocument({
      title, text, stacks, timeline,
    });
  };

  const fetchGetProject = () => {
    store.fetchGetProject();
  };

  return {
    fetchAddDoc, fetchGetProject,
  };
}
