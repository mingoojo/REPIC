import { styled } from 'styled-components';
import { Project } from '../../type/types';

type ProjectItemHeaderProps = {
  project : Project
}

const Container = styled.div`
display: flex;
justify-content: space-between;
color: ${(props) => props.theme.colors.textSecond};
font-size: 1.3rem;
padding: 0;
  div{
    margin: 0px 0px .5rem 0px;
    padding: 0rem 1rem 0rem 1rem;
    white-space: nowrap;
  }
@media (max-width: 720px){
  margin-top: 3rem;
}
`;

export default function ItemInfo({ project }:ProjectItemHeaderProps) {
  return (
    <Container className="itemInfo">
      <div>
        {'댓글수 : '}
        {project.comments.length}
        개
      </div>
      <div>
        {'좋아요 : '}
        {project.likes.length}
        개
      </div>
      <div>
        {'방문자수 : '}
        {project.view.length}
      </div>
    </Container>
  );
}
