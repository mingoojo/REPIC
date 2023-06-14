import { useNavigate } from 'react-router-dom';

export default function FooterField() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/communities/write');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>글작성</button>
    </div>
  );
}
