import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [resourceType, setResourceType] = useState('users');
  const [items, setItems] = useState([]);

  const handleClick = (param) => {
    console.log(param);
    setResourceType(param);
  }

  useEffect(()=> {
    const fetchData = async () => {
      // Make the request
      const result = await axios(
        `https://jsonplaceholder.org/${resourceType}`,
      );
      // Update the items  
      setItems(result.data);      
    };

    fetchData();
  }, [resourceType])

  return (
    <>
      <h1>A Simple React App</h1>
      <button onClick={()=>handleClick('users')}>Users</button>
      <button onClick={()=>handleClick('comments')}>Comments</button>
      <h2>Currently selected resource: {resourceType}</h2>
      <ul>
        {items.map(item => {
              return <li key={item.id}>
                <br />
                {JSON.stringify(item)}    
                <br />               
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                <hr />                
              </li>                                              
        })}
       </ul>  
    </>
  )
}

export default App
