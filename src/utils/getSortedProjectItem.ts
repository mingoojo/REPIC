import { Project } from '../type/types';

type getSortedItemProps = {
  Search : string
  projectItems: Project[]
}

export default function getSortedProjectItem({ Search, projectItems }:getSortedItemProps) {
  const sortedItems = projectItems.filter((projectItem) => (
    projectItem.title.includes(Search.trim())
      || projectItem.text.includes(Search.trim())
  )).sort((a, b) => (b.createdTime.seconds - a.createdTime.seconds));

  return {
    sortedItems,
  };
}
