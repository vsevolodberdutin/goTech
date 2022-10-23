import React from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@mui/material'
import {
  Description,
  RedDescription,
} from '../../uiElements/typography/CustomTypography'

interface inputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBoxBlock = ({value, onChange}:inputProps) => {
  return (
    <Stack>
      <Box style={{ display: 'flex' }}>
        <Description text="What language is your favorite?" />
        <RedDescription text="*" />
      </Box>
      <FormControl>
        <RadioGroup name="language"  value={value} onChange={onChange}>
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
