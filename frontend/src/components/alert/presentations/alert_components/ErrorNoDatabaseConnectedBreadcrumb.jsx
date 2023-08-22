import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import useBreadcrumb from '../../helpers/useBreadcrumb';

const ErrorNoDatabaseConnectedBreadcrumb = () => {
  const { showBreadcrumb, breadcrumbStyle, clearBreadcrumb } = useBreadcrumb();

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
          onClose={clearBreadcrumb}
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
