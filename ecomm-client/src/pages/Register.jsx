import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { REGISTER } from '../gqloperations/mutation'

const Register = () => {
  const navigate = useNavigate();

  const [formData,setFormData]= useState([])
  const [RegisterUser,{loading,error,data}] = useMutation(REGISTER)

  if (loading) return <h1>Signing up.......</h1>
  // if (error) console.log(error);
  if (data) {localStorage.setItem('jwt',data.register.jwt);
navigate('/');}

  

  const handleSubmit = (e) =>{
    e.preventDefault()
    RegisterUser({
      variables:{
        input:formData
      }
    })

  } 
  const handleChange = (e) =>{

    setFormData({...formData,
      [e.target.name]:e.target.value})
  }
  return (
    <div className='container' style={{maxWidth:"500px"}}>

    {
      error && <div className='card-panel red white-text'>{error.message}</div>
    }
    {
      data && <div className='card-panel green white-text'>Account Created</div>
    }
    <h3>Register</h3>
      <form  onSubmit={handleSubmit}>
        {/* name should be same as required for input variable */}
        <input type="text" placeholder='Username' onChange={handleChange} name="username" required/>

        <input type="email" placeholder='Username or email' onChange={handleChange} name="email" required/>

        <input type="password" placeholder='Password' onChange={handleChange} name="password" required/>

        <button className="btn blue" type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
