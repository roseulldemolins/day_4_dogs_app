import React from 'react';
import './App.css';
import FormContainer from './containers/FormContainer.js';
import ImagesContainer from './containers/ImagesContainer.js';
import ErrorMessageContainer from './containers/ErrorMessageContainer.js';

function App() {
  return (
    <>
      <h1>Dogs App 🐶</h1>
      <FormContainer/>
      <ErrorMessageContainer/>
      <ImagesContainer/>
    </>
  );
}

export default App;
