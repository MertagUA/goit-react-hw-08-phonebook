import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { HeaderStyled, Nav } from './Header.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderStyled>
      <Nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/Contacts">Contacts</NavLink>}
      </Nav>
      <UserMenu />
    </HeaderStyled>
  );
};
