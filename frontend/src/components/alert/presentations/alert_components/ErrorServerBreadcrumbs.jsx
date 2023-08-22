import React from 'react';
import Alert from 'react-bootstrap/Alert';
import useBreadcrumb from '../../helpers/useBreadcrumb';

const ErrorServerBreadcrumbs = () => {
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
          <Alert.Heading>Database Connection Failed</Alert.Heading>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
};

export default ErrorServerBreadcrumbs;
