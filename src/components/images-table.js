import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, shallowEqual } from 'react-redux'

const createData = (serialNumber, id, url, title) => {
  return { serialNumber, id, url, title  };
}

const dataForCompare = state => state.list.images.filter(img=> img.compare)

const ImagesTable = () => {

  const compareImages = useSelector(dataForCompare, shallowEqual)
  let rows = []
  compareImages.forEach((img, index)=> rows.push(createData(index+1, img.id, img.url, img.title)))

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.serialNumber}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right"><a href={row.url}>{row.url}</a></TableCell>
              <TableCell align="right">{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ImagesTable;
