import './App.css';
import { useState } from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
function App() {
  const [ show, setShow ] = useState('signup')
  const [ jwt, setJwt ] = useState()
  const [ error, setError ] = useState()
  const [ isLoading, setIsLoading ] = useState()

  const toggleShow = () => {
    if (show === 'signup') {
      setShow('signin')
    } else {
      setShow('signup')
    }
  }

  const signUp = (params) => {
    fetch('http://localhost:4000/sign-up', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(body => {
      if (body.error) {
        setError(body.error)
      } else {
        setError()
        setJwt(body.jwt)
      }
    })
  }


  const signIn = (params) => {
    fetch('http://localhost:4000/sign-in', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(body => {
      if (body.error) {
        setError(body.error)
      } else {
        setError()
        setJwt(body.jwt)
      }
    })
  }

  const renderComponent = () => {
    if (jwt) {
      return <Home/>
    } else if (show === 'signup') {
      return <Signup onToggle={toggleShow} onSubmit={signUp} />
    } else if (show === 'signin') {
      return <Signin onToggle={toggleShow} onSubmit={signIn} />
    }
  }



  return (
    <div className="App">
      { renderComponent() }
      <p>{error}</p>
    </div>
  );
}

export default App;
