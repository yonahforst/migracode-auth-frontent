import { useState } from 'react'
import Api from '../utils/api'

import { Link, useHistory } from 'react-router-dom'

export default function Signin(props) {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState()
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    // create user object from state
    const user = {
      email: email,
      password: password,
    }

    Api.signin(user)
      .then(() => {
        setError(null)
        history.push('/home')
      })
      .catch(error => {
        setError(error)
      })
  }

  return (
    <div className='centerContainer'>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input value={email} onChange={e => setEmail(e.target.value)}/>
        <p>Password</p>
        <input value={password} type='password' onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button>Sign in</button>
        <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>

      </form>
      <p>{error}</p>
    </div>
  )
}