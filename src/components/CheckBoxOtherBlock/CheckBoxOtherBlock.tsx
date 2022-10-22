import React from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material'
import { Description } from '../../uiElements/typography/CustomTypography'

export const CheckBoxOtherBlock = () => {
  return (
    <Stack>
      <Description text="How was the assignment?" />
      <FormControl>
        <RadioGroup>
          <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
          <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
          <FormControlLabel value="Hard" control={<Radio />} label="Hard" />
          <Box style={{ display: 'flex' }}>
            <FormControlLabel
              value="Other:"
              control={<Radio />}
              label="Other:"
            />
            <TextField variant="standard" placeholder="Your answer" />
          </Box>
        </RadioGroup>
      </FormControl>
    </Stack>
  )
}
