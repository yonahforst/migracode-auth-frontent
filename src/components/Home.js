import { useState } from 'react'

export default function Home() {
  const onSignOut = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={onSignOut}>Sign out</button>
    </div>
  )
}