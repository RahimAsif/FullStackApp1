import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite React App</h1>
      <button>Users</button>
      <button>Comments</button>
    </>
  )
}

export default App
