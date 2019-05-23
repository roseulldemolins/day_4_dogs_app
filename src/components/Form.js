import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      dogBreed:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(event){
    const field = event.target.id;
    const value = event.target.value;
    this.setState({[field]: value})
  }

  handleFormSubmit(event){
    event.preventDefault()
    this.props.getDogsPhoto(this.state.dogBreed)
    this.setState({dogBreed:''})
  }

  render(){
    return(
      <div>
        <form
          className='form'
          onSubmit={this.handleFormSubmit}
        >
          <input
            id = 'dogBreed'
            value = {this.state.dogBreed}
            onChange = {this.handleInputChange}
            />
            <button>
              Go
            </button>
        </form>
      </div>
    )
  }
}

export default Form;
