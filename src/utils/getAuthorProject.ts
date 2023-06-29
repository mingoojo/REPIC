import { useEffect } from 'react';
import useProjectStore from '../hooks/useProjectStore';
import { Project } from '../type/types';

type getCommunityItemProps = {
  uid : string
}

export default function getAuthorProject({ uid }:getCommunityItemProps) {
  const [{ projects }, projectStore] = useProjectStore();

  useEffect(() => {
    projectStore.readProjectItemsInfo();
  }, []);

  const AuthorProject:Project[] = projects.filter((item) => (
    item.uid === uid
  ));

  return {
    AuthorProject,
  };
}
