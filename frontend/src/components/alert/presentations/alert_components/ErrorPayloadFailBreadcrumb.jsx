import React from 'react';
import Alert from 'react-bootstrap/Alert';
import useBreadcrumb from '../../helpers/useBreadcrumb';

const ErrorPayloadFailBreadcrumb = () => {
  const { showBreadcrumb, breadcrumbStyle, clearBreadcrumb } = useBreadcrumb();

  const errorMessage = "Your target file 'example.txt' does not exist";

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="danger"
          dismissible
          onClose={clearBreadcrumb}
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
