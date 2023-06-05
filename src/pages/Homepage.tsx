import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../hooks/useStore';

export default function HomePage() {
  const store = useStore();
  const navigate = useNavigate();

  return (
    <div>
      <button type="button">123</button>
      homePage
    </div>
  );
}
