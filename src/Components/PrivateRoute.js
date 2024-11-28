import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roles = [] }) => {
const { keycloak, initialized } = useKeycloak();

if (!initialized) {
  return <div>Loading...</div>;
}

if (!keycloak.authenticated) {
  return <Navigate to="/login" />;
}

if (roles.length > 0) {
  const hasRole = roles.some(role => keycloak.hasRealmRole(role));
  if (!hasRole) {
    return <Navigate to="/home" />;
  }
}

return children;
};

export default PrivateRoute;