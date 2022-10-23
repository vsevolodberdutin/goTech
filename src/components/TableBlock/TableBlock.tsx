import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

// interface DataProps {
//   name: string
//   language: 'JavaScript' | 'TypeScript' | 'CoffeeScript'
//   optionalText: string
//   difficulty: 'Easy' | 'Normal' | 'Hard' | string
// }

export const TableBlock = () => {
  const [state, setState] = useState([
    {
      id: 0,
      name: '',
      language: '',
      optionalText: '',
      difficulty: '',
    },
  ])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios({
        method: `get`,
        url: `http://localhost:3001/questionnaires`,
      })
      setState(data)
    }
    getData()
  }, [])

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
        {state.map((row) => (
          <TableRow
            key={row.id}
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
