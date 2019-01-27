import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Form = () => {

      const [value, setValue] = useState({username: '', password: ''})
      return (
          <div id='container'>
            <div id='navbar'>
              Demo Form Using React Hooks
            </div>
            <form onSumbit={event => {
                event.preventDefault();
             }}>
               <label htmlFor ='username'>Username:</label>
               <input
                type='text'
                name = 'username'
                onChange = {event=>{
                  setValue(event.target.value)}}
                value = {value.username}
               />

               <label htmlFor ='password'>Password:</label>
               <input
                type='text'
                name = 'password'
                onChange = {event=>{
                  setValue(event.target.value)}}
                value = {value.passwords}
               />
               <button type = 'submit'>Submit</button>
            </form>
          </div>
        )
}

ReactDOM.render(
  <Form />,
  document.getElementById('app')
)
