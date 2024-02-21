import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorAlert({ message }) {
  return (
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 text-center" role="alert">
      <span className="font-medium">Error Alert!</span>
      {' '}
      {message}
      .
    </div>
  );
}

ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired,
};
