import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "./Query";
import { DataGrid }  from '@mui/x-data-grid';

const GraphPagination = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: '__typename', headerName: 'Typename', width: 250 },
    { field: 'description', headerName: 'Description', width: 900 },
    { field: 'name', headerName: 'Location Name', width: 550 },
   
  ];
  const rows = data['locations'] ;
  console.log(rows)
return (
  <div style={{alignItems:'start'}}>
  <DataGrid 
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 2},
          },
        }}
        pageSizeOptions={[2, 4,6]}
        getRowId={(row) => row.id}

       />

      <br />
    </div>
  );
};

export default GraphPagination;
