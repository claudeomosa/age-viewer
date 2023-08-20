import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const WarningServerDisconnectedBreadcrumb = () => {
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
          variant="warning"
          dismissible
          onClose={clearAlert}
        >
          <Alert.Heading>Database Disconnected</Alert.Heading>
          <p>
            Database is disconnected. You may use
            {' '}
            <button type="button" className="badge badge-light">
              <FontAwesomeIcon icon={faPlayCircle} size="lg" />
              :server connect
            </button>
            {' '}
            to establish a connection. There&apos;s a graph waiting for you.
          </p>
        </Alert>
      )}
    </div>
  );
};

export default WarningServerDisconnectedBreadcrumb;
