import { useEffect, useState } from 'react'
import Api from '../utils/api'
import { useHistory } from 'react-router-dom'
export default function Home(props) {
  const [ user, setUser ] = useState()
  const [ error, setError ] = useState()
  const history = useHistory()

  const onSignOut = (event) => {
    event.preventDefault()
    // sign out
    Api.signout()
    // navigate to signin
    history.push('/signin')
  }

  const fetchUser = () => {
    Api.getCurrentUser()
    .then(body => {
      // if response is ok, set the user in state
      setError(null)
      setUser(body)
    })
    .catch(error => {
      // otherwise show error
      setError(error)
    })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {user && <p>Welcome {user.email}</p>}
      <p>{error}</p>
      <button onClick={onSignOut}>Sign out</button>
    </div>
  )
}