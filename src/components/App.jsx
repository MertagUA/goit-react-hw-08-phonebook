import { Routes, Route } from 'react-router-dom';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { SharedLayout } from './Layout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/Auth/operations';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts} />}
          />
          <Route
            path="register"
            element={<RestrictedRoute component={Register} />}
          />
          <Route path="login" element={<RestrictedRoute component={Login} />} />
        </Route>
      </Routes>
    )
  );
}
