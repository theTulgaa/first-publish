import React from 'react';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

export const UserNotFound = ({ userNotFound }) => {
  return userNotFound ? null : (
    <div>
      <Alert variant="danger">
        This user has not been found. Try another!
      </Alert>
    </div>
  );
};
