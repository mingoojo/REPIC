import { styled } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import { Project } from '../../type/types';

type ItemRowProps = {
  projectItem : Project
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-weight: 100;
  p{
    font-size: 1.3rem;
    white-space: nowrap;
  }
  .textBox{
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    display: block;
    margin-block: 0.5rem;
    line-height: 1.4;
    width: 100%;
  }
  .iconbox{
    margin-right: 1rem;
    width: 130px;
    display: flex;
    .iconitem{
      display: flex;
      margin: 0rem 0.5rem 0rem 0.5rem;
    img{
      margin-right: 0.5rem;
      height: 15px;
    }
    }
  }
`;

export default function ItemRow({ projectItem }:ItemRowProps) {
  const { isDarkMode } = useDarkMode();
  return (
    <Container className="textLine">
      <p className="textBox">{projectItem.text}</p>
      {
        isDarkMode ? (
          <div className="iconbox">
            <p className="iconitem">
              <img src="/images/icons/like01.png" alt="" />
              {projectItem.likes.length}
            </p>
            <p className="iconitem">
              <img src="/images/icons/more01.png" alt="" />
              {projectItem.view.length}
            </p>
            <p className="iconitem">
              <img src="/images/icons/user02.png" alt="" />
              {projectItem.comments.length}
            </p>
          </div>
        ) : (
          <div className="iconbox">
            <p className="iconitem">
              <img src="/images/icons/like03.png" alt="" />
              {projectItem.likes.length}
            </p>
            <p className="iconitem">
              <img src="/images/icons/more03.png" alt="" />
              {projectItem.view.length}
            </p>
            <p className="iconitem">
              <img src="/images/icons/user04.png" alt="" />
              {projectItem.comments.length}
            </p>
          </div>
        )
      }
    </Container>
  );
}
