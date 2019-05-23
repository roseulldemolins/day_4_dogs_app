import React from 'react';
import Form from '../components/Form.js';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  getDogsPhoto(breed) {
    dispatch(() => {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(dogPhoto => {
        dispatch({
          type: 'ADD_PHOTO',
          dogPhoto
        })
      })
    })
  }
})

export default connect(null, mapDispatchToProps)(Form);
