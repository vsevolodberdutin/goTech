import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

function createData(
  name: string,
  language: 'JavaScript' | 'TypeScript' | 'CoffeeScript',
  optionalText: string,
  difficulty: 'Easy' | 'Normal' | 'Hard' | string
) {
  return { name, language, optionalText, difficulty }
}

const rows = [
  createData('Pitier Pan', 'JavaScript', 'I love its syntax', 'Easy'),
  createData(
    'Sebastian Pareira',
    'TypeScript',
    'My code is cleaner and less bugs',
    'Normal'
  ),
  createData('Swan BlueTooth', 'JavaScript', '', 'Easy'),
  createData('Ann Bartolommeo', 'JavaScript', '', 'Hard'),
  createData('Riche Gingerbread', 'CoffeeScript', 'Its taste is amazing', 'was interesting'),
]

export const TableBlock = () => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Favorite language</TableCell>
          <TableCell align="right">What do you like about programing</TableCell>
          <TableCell align="right">Assignment difficulty</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.language}</TableCell>
            <TableCell align="right">{row.optionalText}</TableCell>
            <TableCell align="right">{row.difficulty}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
