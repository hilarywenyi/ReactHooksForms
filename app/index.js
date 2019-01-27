import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      username:'',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()
    this.setState({
      username:'',
      password:''
    })

  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render () {
    return (
      <div id='container'>
        <div id='navbar'>
         Demo form using React Class Component
        </div>
        <form onSubmit = {this.handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input type='text' name ='username' value = {this.state.username} onChange = {this.handleChange}/>
          <label htmlFor='username'>Password:</label>
          <input type='text' name ='password' value = {this.state.password} onChange = {this.handleChange}/>
          <button type ='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('app')
)
