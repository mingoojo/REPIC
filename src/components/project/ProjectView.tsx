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
  // console.log(projects[0].recruit);

  // 필터하기
  useEffect(() => {
    if (radioValue === 'All') {
      setSortedItem(projects);
    } else if (radioValue === 'Front') {
      setSortedItem(projects.filter((project) => (
        project.recruit === '프론트앤드'
      )));
    } else if (radioValue === 'Back') {
      setSortedItem(projects.filter((project) => (
        project.recruit === '백앤드'
      )));
    } else if (radioValue === 'Design') {
      setSortedItem(projects.filter((project) => (
        project.recruit === '디자인'
      )));
    } else if (radioValue === 'Plan') {
      setSortedItem(projects.filter((project) => (
        project.recruit === '기획'
      )));
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
