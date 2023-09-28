import React, { useState, useEffect } from "react";

function PaginationFetchedData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
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

  // console.log(data["results"]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{alignItems:'start'}}>
      <h1>Data fetched from API</h1>
      {Object.keys(data["results"]).map((key) => {
        const objData = data["results"][key];
        
        const result = Object.keys(objData).map((key2) => {
          return (
            <div > 
              <span style={{fontSize:'35px' ,color:'red',marginTop:'20px'}}>{key2}:</span><span style={{fontSize:'30px'}}>{objData[key2]}</span>
            </div>
          );
        });
        return <div  style={{backgroundColor:'grey',marginTop:'30px',textAlign:'start'}}>{result}</div>;
        
      })}
    </div>
  );
}

export default PaginationFetchedData;
