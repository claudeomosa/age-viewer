/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ErrorServerBreadcrumbs from './alert_components/ErrorServerBreadcrumbs';
import ServerConnectedBreadcrumb from './alert_components/ServerConnectedBreadcrumb';
import ErrorNoDatabaseConnectedBreadcrumb from './alert_components/ErrorNoDatabaseConnectedBreadcrumb';
import WarningServerDisconnectedBreadcrumb from './alert_components/WarningServerDisconnectedBreadcrumb';
import ErrorMetaFailBreadcrumb from './alert_components/ErrorMetaFailBreadcrumb';
import ErrorCypherQueryBreadcrumb from './alert_components/ErrorCypherQueryBreadcrumb';
import ErrorPayloadFailBreadcrumb from './alert_components/ErrorPayloadFailBreadcrumb';
import NoticeAlreadyConnectedBreadcrumb from './alert_components/NoticeAlreadyConnectedBreadcrumb';
import GraphCreatedBreadcrumb from './alert_components/GraphCreatedBreadcrumb';

const SingleAlert = ({
  alertKey,
  alertName,
  removeAlert,
}) => {
  const dispatch = useDispatch();

  const clearAlert = () => {
    dispatch(() => {
      removeAlert(alertKey);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clearAlert();
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (alertName === 'NoticeServerDisconnected') {
    return (
      <WarningServerDisconnectedBreadcrumb />
    );
  }
  if (alertName === 'NoticeServerConnected') {
    return (
      <ServerConnectedBreadcrumb />
    );
  }
  if (alertName === 'ErrorServerConnectFail') {
    return (
      <ErrorServerBreadcrumbs />
    );
  }
  if (alertName === 'ErrorNoDatabaseConnected') {
    return (
      <ErrorNoDatabaseConnectedBreadcrumb />
    );
  }
  if (alertName === 'ErrorMetaFail') {
    return (
      <ErrorMetaFailBreadcrumb />
    );
  }
  if (alertName === 'ErrorCypherQuery') {
    return (
      <ErrorCypherQueryBreadcrumb />
    );
  }
  if (alertName === 'ErrorPlayLoadFail') {
    return (
      <ErrorPayloadFailBreadcrumb />
    );
  }
  if (alertName === 'NoticeAlreadyConnected') {
    return (
      <NoticeAlreadyConnectedBreadcrumb />
    );
  }
  if (alertName === 'CreateGraphSuccess') {
    return (
      <GraphCreatedBreadcrumb />
    );
  }
  return (<></>);
};
SingleAlert.propTypes = {
  alertKey: PropTypes.string.isRequired,
  alertName: PropTypes.string.isRequired,
  removeAlert: PropTypes.func.isRequired,
};

export default SingleAlert;
