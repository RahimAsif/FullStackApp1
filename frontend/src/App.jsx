import { useState } from 'react'
import './App.css'

function App() {
  const [resourceType, setResourceType] = useState('users')

  const handleClick = (param) => {
    console.log(param);
    setResourceType(param);
  }

  return (
    <>
      <h1>A Simple React App</h1>
      <button onClick={()=>handleClick('users')}>Users</button>
      <button onClick={()=>handleClick('comments')}>Comments</button>
      <h2>Currently selected resource: {resourceType}</h2>
    </>
  )
}

export default App
