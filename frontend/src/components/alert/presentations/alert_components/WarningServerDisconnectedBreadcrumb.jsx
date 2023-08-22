import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import useBreadcrumb from '../../helpers/useBreadcrumb';

const WarningServerDisconnectedBreadcrumb = () => {
  const { showBreadcrumb, breadcrumbStyle, clearBreadcrumb } = useBreadcrumb();

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="warning"
          dismissible
          onClose={clearBreadcrumb}
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
