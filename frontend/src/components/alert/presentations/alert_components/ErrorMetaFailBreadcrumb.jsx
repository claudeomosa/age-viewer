import React from 'react';
import Alert from 'react-bootstrap/Alert';
import useBreadcrumb from '../../helpers/useBreadcrumb';

const ErrorMetaFailBreadcrumb = () => {
  const { showBreadcrumb, breadcrumbStyle, clearBreadcrumb } = useBreadcrumb();

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="danger"
          dismissible
          onClose={clearBreadcrumb}
        >
          <Alert.Heading>Metadata Load Error</Alert.Heading>
          <p>
            Unexpected error occurred while getting metadata.
          </p>
        </Alert>
      )}
    </div>
  );
};

export default ErrorMetaFailBreadcrumb;
