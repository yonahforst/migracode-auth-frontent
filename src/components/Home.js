import { useState } from 'react'

export default function Home() {
  const [ user, setUser ] = useState()

  const onSignOut = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1>Home</h1>
      { user && <p>Welcome {user.name}</p> }
      <button onClick={onSignOut}>Sign out</button>
    </div>
  )
}