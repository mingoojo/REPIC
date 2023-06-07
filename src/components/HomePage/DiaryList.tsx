import useFirestore from '../../hooks/useFireStore';

export default function DiaryList({ document }:{document:any}) {
  const { deleteDocument } = useFirestore('writenCollection');
  function handleClick() {
    deleteDocument(document.id);
  }
  return (
    <div>
      {document.id}
      <button type="button" onClick={handleClick}>del</button>
    </div>
  );
}
