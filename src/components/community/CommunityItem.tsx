import styled from 'styled-components';
import { CommunityDocument } from '../../type/types';

type CommunityItemProps = {
  document : CommunityDocument
}

const Container = styled.div`
max-width: 760px;
border: 0.5px solid #222;
padding: 0.5rem 1.5rem 0.5rem 1.5rem;
margin-block: 0.5rem;
&:hover{
  h2{
    font-weight: bold;
  }
}
  h2{
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .textBox{
    display: block;
    line-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
    text-align: left;
    word-wrap: break-word;
    -webkit-line-clamp: 0;
    -webkit-box-orient: vertical;
  }
  .objBox{
    margin-block: 1rem;
  }
`;

export default function CommunityItem({ document }:CommunityItemProps) {
  console.log(document);
  return (
    <Container>
      <div>
        <h2>{document.title}</h2>
      </div>
      <div className="textBox">
        <p>{document.text}</p>
      </div>
      <div className="objBox">
        <span>
          {'Likes  '}
          {document.likes.length}
        </span>
      </div>
    </Container>
  );
}
