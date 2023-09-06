import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppContext } from './app-store';

interface RouteProps {
  path: string;
  element: React.ReactElement;
}
const PrivateRoute: React.FC<RouteProps> = ({ path, element }) => {
  const { username } = useAppContext();
  const isAuthenticated = Boolean(username);

  return isAuthenticated ? (
    <Routes>
      <Route path={path} element={element} />{' '}
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
