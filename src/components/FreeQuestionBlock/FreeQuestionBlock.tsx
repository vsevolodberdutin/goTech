import React from 'react'
import { Stack, TextField } from '@mui/material'
import {
  Description,
  RedDescription,
} from '../../uiElements/typography/CustomTypography'

export const FreeQuestionBlock = () => {
  return (
    <Stack>
      <Description text="What do you like about programing?" />
      <TextField variant="standard" placeholder="Your answer" />
    </Stack>
  )
}
