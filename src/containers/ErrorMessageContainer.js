import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    imageReturn: state.imageReturn
  };
};

export default connect(mapStateToProps)(ErrorMessage);
