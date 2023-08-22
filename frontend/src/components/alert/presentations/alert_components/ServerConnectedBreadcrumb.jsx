import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import useBreadcrumb from '../../helpers/useBreadcrumb';

const ServerConnectedBreadcrumb = () => {
  const { showBreadcrumb, breadcrumbStyle, clearBreadcrumb } = useBreadcrumb();

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="success"
          dismissible
          onClose={clearBreadcrumb}
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
