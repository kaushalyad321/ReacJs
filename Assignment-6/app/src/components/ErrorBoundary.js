import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  const componentDidCatch = (error, errorInfo) => {
    setHasError(true);
    setError(error);
    console.error(error, errorInfo);
  };

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong please refresh the page</h2>
        <p>{error.toString()}</p>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;