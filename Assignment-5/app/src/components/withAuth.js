import React from 'react';
import { Navigate } from 'react-router-dom';
const isAuthenticated = () => {
  return true;
};

const withAuth = (WrappedComponent) => {
  return  {
    render() {
      if (isAuthenticated()) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Navigate to="/login" />;
      }
    }
  };
};

export default withAuth;
