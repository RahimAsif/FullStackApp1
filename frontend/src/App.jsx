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

  // Method for handling delete functionality
  const handleDelete = (itemID) => {  
    // Clone the array
    let newArray = items.map(item => item);    
    // Determine the index to be deleted
    let deleteIndex = -1;
    for(let i=0; i<newArray.length; i++) {
      let item = newArray[i];
      if(item.id == itemID) {
        deleteIndex = i;
      }
    }
    // Remove the deleted item
    let deletedArray = newArray.splice(deleteIndex, 1);
    // Display the deleted item
    console.log(...deletedArray);
    // Update the master items array
    setItems(newArray);    
  }

  useEffect(()=> {
    const fetchData = async () => {
      // Make the request
      const result = await axios(
        `http://localhost:3001/${resourceType}`,
      );
      console.log(result);
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
