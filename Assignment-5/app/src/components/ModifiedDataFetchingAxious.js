import React, { useState, useEffect } from "react";
import axios from 'axios'

function ModifiedDataFetchingAxios() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://catfact.ninja/fact`)
    .then(res => {
      setData(res.data);
      setLoading(false) ;
    })
    
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [loading]); 

  const changeLoading =()=>{
    if(loading===true){
        setLoading(false) ;
    }
    else{
        setLoading(true) ;
    }
  }
 
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data fetched from API</h1>
     {
      Object.keys(data).map( (key)=> {
              return <div key={key}>
                 <span>{key}:</span>
                 <span>{data[key]}</span>
              </div>
            })
            }
        <button onClick={changeLoading}>Refresh</button>
    </div>
  );
}

export default ModifiedDataFetchingAxios;

