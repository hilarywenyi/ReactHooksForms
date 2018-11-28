import React from 'react';
import ReactDOM from 'react-dom';
import useInputState from './useInputState';

const Form = ({state}) => {
    const { value, reset, onChange } = useInputState('');
    return (
        <div id='container'>
          <div id='navbar'>
            Demo Form Using React Hooks
          </div>
          <form onSumbit={event => {
              event.preventDefault();
              state(value); 
              reset();
           }}>
             <label htmlFor ='username'>Username:</label>
             <input type='text' name = 'username' onChange = {onChange} value = {value}/>
             <label htmlFor = 'password'>Password:</label>
             <input type = 'password' name = 'password' onChange = {onChange} value = {value} />
             <button type = 'submit'>Submit</button>
          </form>
        </div>
      )
}

ReactDOM.render(
  <Form />,
  document.getElementById('app')
)
