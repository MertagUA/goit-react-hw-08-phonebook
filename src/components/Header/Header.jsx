import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/Contacts">Contacts</NavLink>}
      </nav>
      <UserMenu />
    </header>
  );
};
