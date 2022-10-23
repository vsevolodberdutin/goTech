import React from 'react'
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material'
import { Description } from '../../uiElements/typography/CustomTypography'

interface inputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBoxOtherBlock = ({ value, onChange }: inputProps) => {
  let textValue = ''
  if (value !== 'Easy' && value !== 'Normal' && value !== 'Hard') {
    textValue = value
  }
  return (
    <Stack>
      <Description text="How was the assignment?" />
      <FormControl>
        <RadioGroup name="difficulty" value={value} onChange={onChange}>
          <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
          <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
          <FormControlLabel value="Hard" control={<Radio />} label="Hard" />
        </RadioGroup>
        <TextField
          variant="standard"
          placeholder="Other answer"
          name="difficulty"
          value={textValue}
          onChange={onChange}
        />
      </FormControl>
    </Stack>
  )
}
