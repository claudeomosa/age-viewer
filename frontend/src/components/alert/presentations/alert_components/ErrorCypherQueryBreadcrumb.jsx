import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const ErrorCypherQueryBreadcrumb = () => {
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

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="danger"
          dismissible
          onClose={clearAlert}
        >
          <Alert.Heading>Query Error</Alert.Heading>
          <p>
            Your query was not executed properly. Refer to the below error message.
          </p>
        </Alert>
      )}
    </div>
  );
};

export default ErrorCypherQueryBreadcrumb;
