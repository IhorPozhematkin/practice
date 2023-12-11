import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <header>
      <nav>
        {!isLoggedIn && <Link to="/login"> Log in</Link>}
        {isLoggedIn && <Link to="/dashboard"> Dashboard</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
}
