import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const ServerConnectedBreadcrumb = () => {
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
          variant="success"
          dismissible
          onClose={clearAlert}
        >
          <Alert.Heading>Database Connected</Alert.Heading>
          <p>
            Successfully connected to the database. You may use
            {' '}
            <a href="/#" className="badge badge-light">
              <FontAwesomeIcon icon={faPlayCircle} size="lg" />
              :server status
            </a>
            {' '}
            to confirm connected database information.
          </p>
        </Alert>
      )}
    </div>
  );
};

export default ServerConnectedBreadcrumb;
