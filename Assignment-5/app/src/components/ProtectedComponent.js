import React from 'react';
import withAuth from './withAuth'; // Import the withAuth HOC

const ProtectedComponent = () => {
  return (
    <div>
      <h1>Protected Component</h1>
      <p>This component can only be accessed by authenticated users.</p>
    </div>
  );
};

export default withAuth(ProtectedComponent); // Apply withAuth to the component
