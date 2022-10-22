import React from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import {
  Description,
  RedDescription,
} from '../../uiElements/typography/CustomTypography'

export const CheckBoxBlock = () => {
  return (
    <Stack>
      <Box style={{ display: 'flex' }}>
        <Description text="What language is your favorite?" />
        <RedDescription text="*" />
      </Box>
      <FormControl>
        <RadioGroup>
          <FormControlLabel
            value="JavaScript"
            control={<Radio />}
            label="JavaScript"
          />
          <FormControlLabel
            value="TypeScript"
            control={<Radio />}
            label="TypeScript"
          />
          <FormControlLabel
            value="CoffeeScript"
            control={<Radio />}
            label="CoffeeScript"
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  )
}
