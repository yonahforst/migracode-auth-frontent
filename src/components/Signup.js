import { useState } from 'react'
import Api from '../utils/api'

import { Link, useHistory } from 'react-router-dom'

export default function Signup(props) {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    // create user object from state
    const user = {
      name: name,
      email: email,
      password: password,
    }

    // POST user object to backend
    Api.signup(user)
    .then(() => {
      // if response is ok, clear any existing error and navigate to home      
      setError(null)
      history.push('/home')
    })
    .catch(error => {
      // otherwise show error
      setError(error)
    })
  }
  

  return (
    <div className='centerContainer'>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <p>Email</p>
        <input value={email} onChange={e => setEmail(e.target.value)}/>
        <p>Password</p>
        <input value={password} type='password' onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button>Sign up</button>
        <p>Already have an account? <Link to='/signin'>Sign in</Link></p>
      </form>

      <p>{error}</p>
    </div>
  )
}