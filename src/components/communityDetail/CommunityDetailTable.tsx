import { styled } from 'styled-components';
import { CommunityDocument } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';
import Comments from './Comments';
import TableHeader from './TableHeader';

type CommunityDetailTableProps = {
  document : CommunityDocument
}

const Container = styled.div`
h1{
  font-size: 3rem;
}
table{
  margin-block: 1rem;
}
td,th{
  padding: 0px 3rem 0px 0px;
}
main{
  width: 100%;
  height: 700px;
  overflow: hidden;
  word-break:break-all;
  line-height: 1.4;
  font-size: 1.7rem;
  padding: 1rem;
}
`;

export default function CommunityDetailTable({ document }:CommunityDetailTableProps) {
  const { date } = getCreatedTime({ time: document.createdTime });
  return (
    <Container>
      <h1>{document.title}</h1>
      <TableHeader date={date} document={document} />
      <main>
        {document.text}
      </main>
      <Comments />
    </Container>
  );
}
