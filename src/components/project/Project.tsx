import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetchPrivateStore from '../../hooks/useFetchPrivateStore';
import usePrivateStore from '../../hooks/usePrivateStore';
import { ProjectItem } from '../../type/types';
import CardAuth from './CardAuth';

type ProjectProps = {
  project : ProjectItem
}

const Container = styled.div`
width: 33%;
padding: 1rem;
  .itemCard{
    border: 2px solid #222;

  }
  
`;

export default function Project({ project }:ProjectProps) {
  const { fetchGetPrivate } = useFetchPrivateStore();
  const [{ privateItem }] = usePrivateStore();
  useEffect(() => {
    fetchGetPrivate();
  }, []);

  if (!privateItem.length) {
    return null;
  }
  return (
    <Container>
      <Link to={`/projects/${project.id}`}>
        <div className="itemCard">
          <div>
            {project.title}
          </div>
          <div>
            {project.text}
          </div>
          <div>
            {project.title}
          </div>
          <CardAuth privateItem={privateItem} project={project} />
        </div>
      </Link>
    </Container>
  );
}
