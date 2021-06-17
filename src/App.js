import './App.css';
import { useState } from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'

function App() {
  const [ path, setPath ] = useState('signup')

  return (
    <div className="App">
      { path == 'signin' && <Signin navigate={setPath} /> }
      { path == 'signup' && <Signup navigate={setPath} />}
      { path == 'home' && <Home navigate={setPath} /> }
    </div>
  );
}

export default App;
