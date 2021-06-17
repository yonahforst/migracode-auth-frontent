const signup = (user) => {
    // POST user object to backend
    const signupPromise = fetch('http://localhost:4000/sign-up', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => {    
      if (res.status !== 201) {
        throw res.statusText
      }
    
      return res.json()
    })
    .then(body => {
      // if response is ok, save jwt
      localStorage.setItem('jwt', body.jwt)
    })

    return signupPromise
}

const signin = (user) => {
  // POST user object to backend
  const signinPromise = fetch('http://localhost:4000/sign-in', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user)
  })
  .then(res => {    
    if (res.status !== 200) {
      throw res.statusText
    }
  
    return res.json()
  })
  .then(body => {
    // if response is ok save jwt
    localStorage.setItem('jwt', body.jwt)
  })

  return signinPromise
}

const getCurrentUser = () => {
  // get jwt from localStorage
  const jwt = localStorage.getItem('jwt')  

  // fetch auth endpoint (including jwt as authorization header)
  const currentUserPromise = fetch('http://localhost:4000/auth', {
    method: 'GET',
    headers: {
      'authorization': jwt
    },
  })
  .then(res => {    
    if (res.status !== 200) {
      throw res.statusText
    }
  
    return res.json()
  })

  return currentUserPromise
}

const signout = () => {
  // remove jwt from localstorage
  localStorage.removeItem('jwt')
}

export default {
  signup: signup,
  signin: signin,
  getCurrentUser: getCurrentUser,
  signout: signout,
}