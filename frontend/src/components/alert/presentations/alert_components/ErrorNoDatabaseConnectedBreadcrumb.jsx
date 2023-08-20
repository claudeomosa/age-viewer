import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const ErrorNoDatabaseConnectedBreadcrumb = () => {
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
          <Alert.Heading>No Database Connected</Alert.Heading>
          <p>
            You haven&apos;t set up a database connection. You may use
            {' '}
            <a href="/#" className="badge badge-light">
              <FontAwesomeIcon icon={faPlayCircle} size="lg" />
              :server connect
            </a>
            {' '}
            to establish a connection. There&apos;s a graph waiting for you.
          </p>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default ErrorNoDatabaseConnectedBreadcrumb;
