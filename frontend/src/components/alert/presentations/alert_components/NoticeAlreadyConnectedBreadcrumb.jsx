import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const NoticeAlreadyConnectedBreadcrumb = () => {
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
          variant="info"
          dismissible
          onClose={clearAlert}
        >
          <Alert.Heading>Already Connected to Database</Alert.Heading>
          <p>
            You are currently connected to a database.
            If you want to access another database you may execute
            {' '}
            <a href="/#" className="badge badge-light">
              <FontAwesomeIcon icon={faPlayCircle} size="lg" />
              :server disconnect
            </a>
            {' '}
            to disconnect from the current database first.
          </p>
        </Alert>
      )}
    </div>
  );
};

export default NoticeAlreadyConnectedBreadcrumb;
