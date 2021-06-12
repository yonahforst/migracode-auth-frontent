import { useState } from 'react'

export default function Signup(props) {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = () => {
    props.onSubmit({
      name,
      email,
      password,
    })
  }

  const handleToggle = (event) => {
    event.preventDefault()
    props.onToggle()
  }

  return (
    <div className='centerContainer'>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <p>Email</p>
        <input value={email} onChange={e => setEmail(e.target.value)}/>
        <p>Password</p>
        <input value={password} type='password' onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button>Signup</button>
        <p>Already have an account? <a href='/#' onClick={handleToggle}>Login</a></p>
      </form>
    </div>
  )
}