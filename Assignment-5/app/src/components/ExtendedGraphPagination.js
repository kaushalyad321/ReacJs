import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "./Query";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const ExtendedGraphPagination = () => {
  const [id, setId] = useState("");
  const [typeName, setTypeName] = useState("");
  const [description, setDescription] = useState("");
  const [locationName, setLocationName] = useState("");
  const [obj, setObj] = useState("");
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "__typename", headerName: "Typename", width: 250 },
    { field: "description", headerName: "Description", width: 900 },
    { field: "name", headerName: "Location Name", width: 550 },
  ];
  const rows = data["locations"];

  return (
    <div style={{ alignItems: "start" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 2 },
          },
        }}
        pageSizeOptions={[2, 4, 6]}
        getRowId={(row) => row.id}
      />

      <br />
      <h3>For Deleting the Data only enter Id</h3>
      <form>
        <div>
          <label>ID:</label>
          <input
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Typename:</label>
          <input
            onChange={(e) => {
              setTypeName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Description:</label>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Location Name:</label>
          <input
            onChange={(e) => {
              setLocationName(e.target.value);
            }}
          ></input>
        </div>

        <button>Add Data</button>
        <button>Update Data</button>
        <button>Delete Data</button>
      </form>
    </div>
  );
};

export default ExtendedGraphPagination;
