import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const GraphCreatedBreadcrumb = () => {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);

  useEffect(() => {
    setShowBreadcrumb(true);
    setTimeout(() => {
      setShowBreadcrumb(false);
    }, 5000);
  }, []);

  const breadcrumbStyle = {
    position: 'fixed',
    top: '60px', // Adjust as needed
    right: showBreadcrumb ? '10px' : '-500px',
    transition: 'right 0.3s',
    zIndex: 1000,
  };

  const clearAlert = () => {
    setShowBreadcrumb(false);
  };

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="success"
          dismissible
          onClose={clearAlert}
        >
          <Alert.Heading>Graph Created</Alert.Heading>
          <p>
            Successfully created a new graph.
          </p>
        </Alert>
      )}
    </div>
  );
};

export default GraphCreatedBreadcrumb;
