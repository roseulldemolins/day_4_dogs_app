import React from 'react';

const ErrorMessage = (props) => {
  const errorText = () => {
    if (props.imageReturn == false) {
      return(`Could not find dog breed`)
    }else {
      return('')
    }
  }

  return(
    <div className="error-message">{errorText()}</div>
  )
}

export default ErrorMessage
