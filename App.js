import React, {useEffect,useState} from 'react';

function App() {
   const [data,setData] = useState({})
 useEffect(()=>{
    fetchData();
 },[]);
   
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data')
      const jsonData = await response.json();
      setData(jsonData)
    } catch (error) {
      console.log('Error',error)
  }
  }
  return (
    <div className="App">
      
          Python +  Frontend
       <h3>{data.message}</h3>
    </div>
  );
}

export default App;
