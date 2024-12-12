import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs,setInputs]=useState({
    username:"",
    email:"",
    password:""
  })
const [err,setError]=useState(null)
const navigate=useNavigate();
  const handleChange=(e)=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit= async e=>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/api/auth/register",inputs);
      navigate("/login")
    } catch (error) {
      setError(error.response.data)
    }
  }
  return (
    <div className='auth'>
      <h1>
        Register</h1>
        <form>
        <input
          required
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          required
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          required
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}


export default Register







