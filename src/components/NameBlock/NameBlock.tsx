import React from 'react'
import { Box, Stack, TextField } from '@mui/material'
import {
  Description,
  RedDescription,
} from '../../uiElements/typography/CustomTypography'

interface inputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const NameBlock = ({value, onChange}:inputProps) => {
  return (
    <Stack>
      <Box style={{display:'flex'}}>
        <Description text="What is your name?" />
        <RedDescription text="*" />
      </Box>
      <TextField variant="standard" placeholder='Your answer' name='name' value={value} onChange={onChange}/>
    </Stack>
  )
}
