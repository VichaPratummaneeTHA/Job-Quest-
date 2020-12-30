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
    
    setInputValue(formData);
    setFormData('')
    toggleSubmit(true)
    updateTime();

    event.preventDefault();
  }

  const handleLogOut = event => {
    event.preventDefault();

    setInputValue('')
    setFormData('')
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
      submit = {submit}
      />
    </Fragment>
  )
}

export default App
