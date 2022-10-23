import React from 'react'
import { Stack, TextField } from '@mui/material'
import {
  Description,
  RedDescription,
} from '../../uiElements/typography/CustomTypography'

interface inputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FreeQuestionBlock = ({value, onChange}:inputProps) => {
  return (
    <Stack>
      <Description text="What do you like about programing?" />
      <TextField variant="standard" placeholder="Your answer" name='optionalText' value={value} onChange={onChange}/>
    </Stack>
  )
}
