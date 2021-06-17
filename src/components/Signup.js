import { useState } from 'react'

export default function Signup(props) {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const onSignin = (event) => {
    event.preventDefault()
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
        <p>Already have an account? <a href='/#' onClick={onSignin}>Sign in</a></p>
      </form>
    </div>
  )
}