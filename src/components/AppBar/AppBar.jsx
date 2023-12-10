import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <header>
      <nav>
        <Link to="/login"> Log in</Link>
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
}
