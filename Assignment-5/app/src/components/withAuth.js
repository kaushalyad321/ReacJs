import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthenticated: false, // You can implement your authentication logic here
      };
    }

    render() {
      if (this.state.isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        // Redirect to the login page or display an error message
        return <Navigate to="/login" />;
      }
    }
  };
};

export default withAuth;