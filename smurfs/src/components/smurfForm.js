import React, { Component } from 'react';
import axios from 'axios';

class smurfForm extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      age: 0,
      height: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name] : e.target.value })
  }

  handleChangeNum = e => {
    this.setState({ age: parseInt(e.target.value)})
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    axios.post('http://localhost:3333/smurfs', this.state)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    const { name, age, height } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label> Add New Smurf </label>
          <div>
          <label> Name: </label>
            <input 
            type="text" 
            name='name' 
            value={name} 
            onChange={this.handleChange}
            />
          </div>
          <div>
          <label> Age: </label>
            <input 
            type="number" 
            name='age' 
            value={age}
            onChange={this.handleChangeNum}
            />
          </div>
          <div>
          <label> Height: </label>
            <input 
            type="number" 
            name='height' 
            value={height}
            onChange={this.handleChange} 
            />
          </div>
          <button type='submit'>
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default smurfForm;