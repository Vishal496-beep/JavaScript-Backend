import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch((error) => {
      console.log(error);
      
      ;
      
    })
  },[])

  return (
    <>
    <h1>Chai aur Full javascript backend</h1>
    <p>JOKES: {jokes.length}</p>

  {
  jokes.map(jk => (
    <div key={jk.id}>
      <h3>{jk.title}</h3>
      <p>{jk.content}</p>
    </div>
  ))
}

    </>
  )
}

export default App
