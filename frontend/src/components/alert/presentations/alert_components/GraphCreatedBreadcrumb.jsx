import React from 'react';
import Alert from 'react-bootstrap/Alert';
import useBreadcrumb from '../../helpers/useBreadcrumb';

const GraphCreatedBreadcrumb = () => {
  const { showBreadcrumb, breadcrumbStyle, clearBreadcrumb } = useBreadcrumb();

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="success"
          dismissible
          onClose={clearBreadcrumb}
        >
          <Alert.Heading>Graph Created</Alert.Heading>
          <p>
            Successfully created a new graph.
          </p>
        </Alert>
      )}
    </div>
  );
};

export default GraphCreatedBreadcrumb;
