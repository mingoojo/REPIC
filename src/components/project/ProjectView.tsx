import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import useForceUpdate from '../../hooks/useForceUpdate';
import useProjectQueryStore from '../../hooks/useProjectQueryStore';
import { Project } from '../../type/types';
import ProjectBanner from './ProjectBanner';
import ProjectTable from './ProjectTable';

type ProjectViewProps = {
  Page : string
  Search : string
  projects : Project[]
}

const Container = styled.div``;

export default function ProjectView({ Page, Search, projects }:ProjectViewProps) {
  const forceUpdate = useForceUpdate();
  const [sortedItem, setSortedItem] = useState(projects);
  const [{ radioValue }] = useProjectQueryStore();

  // 필터하기
  useEffect(() => {
    if (radioValue === 'All') {
      // console.log(projects);
      setSortedItem(projects);
    } else if (radioValue === 'Front') {
      setSortedItem(projects.filter((project) => (
        project.stacks.includes('react' || 'vue' || 'angler' || 'javascript' || 'typescript' || 'svelte' || 'next')
      )));
    } else if (radioValue === 'Back') {
      setSortedItem(projects.filter((project) => (
        project.stacks.includes('diango' || 'docker' || 'express' || 'java' || 'mongodb' || 'mysql' || 'nest' || 'nodejs' || 'postgresql' || 'spring')
      )));
    } else if (radioValue === 'Design') {
      setSortedItem(projects);
    } else if (radioValue === 'Plan') {
      setSortedItem(projects);
    }
    forceUpdate();
  }, [radioValue]);

  return (
    <Container>
      <ProjectBanner />
      <ProjectTable Page={Page} Search={Search} projects={sortedItem} />
    </Container>
  );
}
