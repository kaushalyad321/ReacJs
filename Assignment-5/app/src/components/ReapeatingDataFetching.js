import React, { useState, useEffect } from "react";

function ReapeatingDataFetching() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
   const changeLoading=()=>{
    fetch("https://official-joke-api.appspot.com/random_joke") 
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  
    }
    useEffect(()=>{
     changeLoading() ;
    },[])
  
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
        <button onClick={()=>{setLoading(true);changeLoading()}}>Refresh</button>
    </div>
  );
}

export default ReapeatingDataFetching;

