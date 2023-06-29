import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Project } from '../../type/types';
import MoreViewButton from '../ui/MoreViewButton';
import ProejectsItem from './ProejectsItem';

type ProjectListProps = {
  projectItems : Project[]
}

const Container = styled.div`
  .communityBox{
    a{
      text-decoration: none;
    }
    margin-bottom: 1rem;
  }
  .buttonBox{
    margin-block: 1rem;
  }
`;

export default function ProjectList({ projectItems }:ProjectListProps) {
  const [infinityNumber, setInfinityNumber] = useState(1);

  const routedProjectItems = projectItems.filter((projectItem, index) => (
    index < (infinityNumber) * 10
  ));
  return (
    <Container>
      <div className="communityBox">
        {
          routedProjectItems.map((projectItem) => (
            <Link key={projectItem.id} to={`/projects/${projectItem.id}`}>
              <ProejectsItem projectItem={projectItem} />
            </Link>
          ))
        }
      </div>
      {
        (infinityNumber) * 10 < projectItems.length ? (
          <div className="buttonBox">
            <MoreViewButton infinityNumber={infinityNumber} setInfinityNumber={setInfinityNumber} />
          </div>
        ) : (
          null

        )
      }
    </Container>
  );
}
