import React, { useEffect } from 'react';


const withLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} mounted`);

      return () => {
        console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} updated`);
    });

    return <WrappedComponent {...props} />;
  };

  return WithLogger;
};

function MyComponent() {
  return <div>My Component</div>;
}


const MyComponentWithLogger = withLogger(MyComponent);


function WithLogger() {
  return (
    <div>
      <h1>App</h1>
      <MyComponentWithLogger />
    </div>
  );
}

export default WithLogger;
