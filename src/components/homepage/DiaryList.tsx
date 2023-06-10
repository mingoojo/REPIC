import useFetchStore from '../../hooks/useFetchStore';
import DocumentProps from '../../type/types';

type DiaryList = {
  document : DocumentProps
  transaction : string
}

export default function DiaryList({ document, transaction }:DiaryList) {
  const { DeleteDocument } = useFetchStore(`Private__${transaction}`);
  function handleClick() {
    DeleteDocument(document.id);
  }
  return (
    <div>
      {document.title}
      <button type="button" onClick={handleClick}>del</button>
    </div>
  );
}
