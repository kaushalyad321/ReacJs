import React, { useState, useEffect } from "react";
import { DataGrid }  from '@mui/x-data-grid';

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

  const columns = [
    { field: 'title', headerName: 'Title', width: 350 },
    { field: 'episode_id', headerName: 'Episode_id', width: 340 },
    { field: 'opening_crawl', headerName: 'Opening Crawl', width: 1100 },
    
  ];
  const rows = data['results'] ;
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{alignItems:'start'}}>
      <h1>Data fetched from API</h1>
      <DataGrid 
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 2},
          },
        }}
        pageSizeOptions={[2, 4,6]}
        getRowId={(row) => row.title}

       />
    </div>
  );
}

export default PaginationFetchedData;
