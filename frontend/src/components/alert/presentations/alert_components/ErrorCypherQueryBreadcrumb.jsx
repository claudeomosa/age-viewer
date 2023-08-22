import React from 'react';
import Alert from 'react-bootstrap/Alert';
import useBreadcrumb from '../../helpers/useBreadcrumb';

const ErrorCypherQueryBreadcrumb = () => {
  const { showBreadcrumb, breadcrumbStyle, clearBreadcrumb } = useBreadcrumb();

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="danger"
          dismissible
          onClose={clearBreadcrumb}
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
