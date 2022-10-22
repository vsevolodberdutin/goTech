import React from 'react'
import { Button, styled, Typography } from '@mui/material'

const StyledButton = styled(Button)({
  height: 46,
  borderRadius: 50,
  border: '2px solid #002e63',
  color: '#002e63',
  fontFamily: 'Poppins',
  fontWeight:'bolder',
  fontSize: '0.75rem',
  paddingInline: 35,
})
const StyledSubmitButton = styled(StyledButton)({
  backgroundColor: '#002e63',
  color: '#ffffff',
  width:'260px',
  marginTop:'40px',
})

export const MenuButton: any = ({ name }: any) => {
  return <StyledButton>{name}</StyledButton>
}
export const SubmitButton: any = ({name}: any) => {
  return <StyledSubmitButton>{name}</StyledSubmitButton>
}
