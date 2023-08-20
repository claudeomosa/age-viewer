import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const ErrorPayloadFailBreadcrumb = () => {
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

  const errorMessage = "Your target file 'example.txt' does not exist";

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="danger"
          dismissible
          onClose={clearAlert}
        >
          <Alert.Heading>Failed to Load Play Target</Alert.Heading>
          <p>
            {errorMessage}
            does not exist.
          </p>
        </Alert>
      )}
    </div>
  );
};

export default ErrorPayloadFailBreadcrumb;
