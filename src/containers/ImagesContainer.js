import React from 'react';
import Images from '../components/Images';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dogPhotos: state.dogPhotos
  };
};

export default connect(mapStateToProps)(Images)
