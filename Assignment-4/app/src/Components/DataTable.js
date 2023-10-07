import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 350 },
  { field: 'firstName', headerName: 'First name', width: 340 },
  { field: 'lastName', headerName: 'Last name', width: 340 },
  {
    field: 'age',
    headerName: 'Age',
    width: 350,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 350,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Singh', firstName: 'Kaushal', age: 35 },
  { id: 2, lastName: 'Modi', firstName: 'Pappu', age: 42 },
  { id: 3, lastName: 'Das', firstName: 'Sohan', age: 45 },
  { id: 4, lastName: 'Gond', firstName: 'Mohan', age: 16 },
  { id: 5, lastName: 'Bohra', firstName: 'Lophan', age: 100 },
  { id: 6, lastName: 'Yadav', firstName: 'Chanda', age: 90 },
  { id: 7, lastName: 'Das', firstName: 'Lola', age: 44 },
  { id: 8, lastName: 'Choudhary', firstName: 'Roshan', age: 36 },
  { id: 9, lastName: 'Sah', firstName: 'Alok', age: 65 },
  { id: 10, lastName: 'Das', firstName: 'Bhola', age: 44 },
  { id: 11, lastName: 'Choudhary', firstName: 'Chandan', age: 36 },
  { id: 12, lastName: 'Sah', firstName: 'Deepak', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
