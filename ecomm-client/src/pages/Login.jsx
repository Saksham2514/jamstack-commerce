import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGIN } from '../gqloperations/mutation'


const Login = () => {
  const navigate = useNavigate()

  const [formData,setFormData]= useState([])
  const [loginUser,{loading,error,data}] = useMutation(LOGIN)

  if (loading) return <h1>Logging in.......</h1>
  
  if (data) {
    localStorage.setItem('jwt',data.login.jwt)
    localStorage.setItem('e',btoa(data.login.user.email))
    navigate('/')
    
  }

    

  const handleSubmit = (e) =>{
    e.preventDefault()
    loginUser({
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
      error && <div className='card-panel red'>{error.message}</div>
    }
    {
      data && <div className='card-panel green text-white'>Logged in</div>
    }
    <h3>Login</h3>
        <form  onSubmit={handleSubmit}>
        {/* name should be same as required for input variable */}
        <input type="text" placeholder='Username or email' onChange={handleChange} name="identifier" required/>
        <input type="password" placeholder='Password' onChange={handleChange} name="password" required/>
        <button className="btn blue" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
