import React, {Fragment, useState} from 'react'

// Layout
import Navbar from './layout/Navbar'
import Home from './layout/Home'


const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: ''
  });
  const {name, password, email} = formData;

  const [inputValue, setInputValue] = useState('')
  const [submit, toggleSubmit] = useState(false)
  const [valid, setValid] = useState(false)


  // Clock Update
  const now = new Date().toLocaleTimeString('en-GB');
  const [time, setTime] = useState(now);
  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString('en-GB');

    setTime(newTime);
  }
  setInterval(updateTime, 1000) 

  const handleOnchange = event => setFormData({...formData, [event.target.name]: event.target.value});

  const handleSubmit = event => {

    console.log(formData)

     if(name && password && email){
          setInputValue(formData);
          setValid(true)     
          updateTime();
        }
      else{   
        alert('Try Again ..')
      }
      toggleSubmit(true)
      setFormData('')
      event.preventDefault();
  }  
    
  

  const handleLogOut = event => {
  
    setInputValue('')
    setFormData('')
    setValid(false)
    event.preventDefault();
  }

  return (
    <Fragment>
      <Navbar
      time= {time}
      inputValue = {inputValue}
      handleLogOut = {handleLogOut}
   
       />
      <Home 
      name = {name}
      password = {password}
      email = {email}
      handleOnchange = {handleOnchange}
      inputValue = {inputValue}
      handleSubmit = {handleSubmit}
      valid={valid}
      submit = {submit}
      />
    </Fragment>
  )
}

export default App
