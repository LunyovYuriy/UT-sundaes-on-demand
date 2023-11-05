import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertBanner({
  message = 'An unexpected error ocurred. Please try again later.',
  variant = 'danger',
}) {
  return <Alert variant={variant}>{message}</Alert>;
}
