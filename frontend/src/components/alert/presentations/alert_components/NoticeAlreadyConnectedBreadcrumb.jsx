import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import useBreadcrumb from '../../helpers/useBreadcrumb';

const NoticeAlreadyConnectedBreadcrumb = () => {
  const { showBreadcrumb, breadcrumbStyle, clearBreadcrumb } = useBreadcrumb();

  return (
    <div style={breadcrumbStyle}>
      {showBreadcrumb && (
        <Alert
          variant="info"
          dismissible
          onClose={clearBreadcrumb}
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
