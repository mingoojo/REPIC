import { useEffect } from 'react';
import { styled } from 'styled-components';
import Banner from '../components/project/Banner';
import ProjcetTable from '../components/project/ProjcetTable';
import useFetchProjectStore from '../hooks/useFetchProjectStore';
import useProjectStore from '../hooks/useProjectStore';

const Container = styled.div``;

export default function ProjectPage() {
  const { fetchGetProject } = useFetchProjectStore();
  const [{ projects }] = useProjectStore();
  useEffect(() => {
    fetchGetProject();
  }, []);

  if (!projects.length) {
    return null;
  }

  return (
    <Container>
      <Banner />
      <ProjcetTable projects={projects} />
    </Container>
  );
}
