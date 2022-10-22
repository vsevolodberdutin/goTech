import { Stack } from '@mui/material'
import React from 'react'
import {
  Description,
  RedDescription,
  SubHeader,
} from '../../uiElements/typography/CustomTypography'

export const HeaderBlock = () => {
  return (
    <Stack>
      <SubHeader text="GoTech Questionaire" />
      <Description text="Show me what you got!" />
      <RedDescription text="*Required" />
    </Stack>
  )
}
