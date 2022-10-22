import React from 'react'
import { Box, Stack, TextField } from '@mui/material'
import {
  Description,
  RedDescription,
} from '../../uiElements/typography/CustomTypography'

export const NameBlock = () => {
  return (
    <Stack>
      <Box style={{display:'flex'}}>
        <Description text="What is your name?" />
        <RedDescription text="*" />
      </Box>
      <TextField variant="standard" placeholder='Your answer'/>
    </Stack>
  )
}
