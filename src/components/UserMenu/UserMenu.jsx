import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/Auth/operations';
import { UserMenuBtn, UserMenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogOut = () => dispatch(logOut());
  const { user, isLoggedIn } = useAuth();
  return (
    <UserMenuWrapper>
      {isLoggedIn ? (
        <p>Welcome, {user.name}</p>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </>
      )}
      {isLoggedIn && (
        <UserMenuBtn type="button" onClick={onLogOut}>
          Logout
        </UserMenuBtn>
      )}
    </UserMenuWrapper>
  );
};
