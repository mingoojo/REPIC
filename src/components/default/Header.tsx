import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">home</Link>
        <Link to="/signup">signup</Link>
        <Link to="/login">login</Link>
      </nav>
      <h2>두근두근 비밀일기</h2>
    </header>
  );
}
