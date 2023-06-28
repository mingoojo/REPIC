import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectView from '../components/project/ProjectView';
import useProjectQueryStore from '../hooks/useProjectQueryStore';
import useProjectStore from '../hooks/useProjectStore';

export default function ProjectPage() {
  const [params] = useSearchParams();

  const [{ projects }, projectStore] = useProjectStore();
  const [, projectQueryStore] = useProjectQueryStore();

  const Page = params.get('page') ?? '';
  const Filter = params.get('filter') ?? '';
  const Search = params.get('search') ?? '';

  useEffect(() => {
    projectStore.readProjectItemsInfo();
  }, []);

  useEffect(() => {
    projectQueryStore.changeRadioValue(Filter);
  }, [Filter]);

  useEffect(() => {
    projectQueryStore.changeSearchText(Search);
  }, [Filter, Search]);

  if (!projects.length) {
    return null;
  }

  return (
    <ProjectView Page={Page} Search={Search} projects={projects} />
  );
}
