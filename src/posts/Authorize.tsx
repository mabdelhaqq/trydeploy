import React, { ReactNode } from 'react';
import { useAppContext } from '../helpers/app-store';

interface AuthProps {
  allowedRoles: string[];
  children: ReactNode;
}

const Authorize: React.FC<AuthProps> = ({ allowedRoles, children }) => {
  const { role } = useAppContext();
  if (allowedRoles.includes(role)) {
    return <>{children}</>;
  }
  return null;
};

export default Authorize;
