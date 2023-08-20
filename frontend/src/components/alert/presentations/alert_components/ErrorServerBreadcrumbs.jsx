import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const ErrorServerBreadcrumbs = () => {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);

  useEffect(() => {
    setShowBreadcrumb(true);
    setTimeout(() => {
      setShowBreadcrumb(false);
    }, 5000);
  }, []);

  const breadcrumbStyle = {
    position: 'fixed',
    top: '60px',
    right: showBreadcrumb ? '10px' : '-500px',
    transition: 'right 0.3s',
    zIndex: 1000,
  };

  const clearAlert = () => {
    setShowBreadcrumb(false);
  };

  const errorMessage = (
    <p>
      Failed to connect to the database. Are you sure the database is running on the server?
    </p>
  );

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="danger"
          dismissible
          onClose={clearAlert}
        >
          <Alert.Heading>Database Connection Failed</Alert.Heading>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default ErrorServerBreadcrumbs;
