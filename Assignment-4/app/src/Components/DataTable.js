import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
} from "@mui/material";

const rows = [
  { id: 1, name: "Lallu", age: 30, city: "Noida" },
  { id: 2, name: "Mona", age: 22, city: "Noida" },
  { id: 3, name: "Pappu", age: 35, city: "Noida" },
  { id: 4, name: "Jonu", age: 30, city: "Noida" },
  { id: 5, name: "Lala", age: 15, city: "Noida" },
  { id: 6, name: "Popu", age: 51, city: "Noida" },
  { id: 7, name: "Golu", age: 33, city: "Noida" },
  { id: 8, name: "Chhero", age: 11, city: "Noida" },
  { id: 9, name: "Tuna", age: 27, city: "Noida" },
  { id: 10, name: "Keko", age: 29, city: "Noida" },
  { id: 11, name: "Nanu", age: 20, city: "Noida" },
  { id: 12, name: "Thelo", age: 12, city: "Noida" },
];

const columns = [
  { id: "name", label: "Name" },
  { id: "age", label: "Age" },
  { id: "city", label: "City" },
];

const DataTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState(columns[0].id);
  const [order, setOrder] = useState("asc");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = rows.sort((a, b) => {
    const isAsc = order === "asc";
    return isAsc ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
  });

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
