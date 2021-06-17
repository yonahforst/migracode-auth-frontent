import { useState } from 'react'

export default function Signin(props) {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const onSignup = (event) => {
    event.preventDefault()
    props.navigate('signup')
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
        <p>Don't have an account? <a href='/#' onClick={onSignup}>Sign up</a></p>

      </form>

    </div>
  )
}