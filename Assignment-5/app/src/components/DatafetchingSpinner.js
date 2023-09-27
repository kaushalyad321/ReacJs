import React, { useState, useEffect } from "react";

function FetchedData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    fetch("https://catfact.ninja/fact") 
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); 

 
 
  if (loading) {
    return <div className="spin" style={{marginLeft:'900px'}}></div>;
  }

  return (
    <div>
      <h1>Data fetched from API</h1>
     {
      Object.keys(data).map( (key)=> {
              return <div>
                 <span>{key}:</span>
                 <span>{data[key]}</span>
              </div>
            })
            }
       
    </div>
  );
}

export default FetchedData;

