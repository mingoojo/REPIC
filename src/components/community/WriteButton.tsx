import { useNavigate } from 'react-router-dom';

export default function WriteButton() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/communities/write');
  }
  return (
    <button type="button" onClick={handleClick}>글쓰기</button>
  );
}
