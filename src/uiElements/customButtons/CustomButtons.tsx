import React from 'react'
import { Button, styled, Typography } from '@mui/material'

const StyledButton = styled(Button)({
  height: 46,
  borderRadius: 50,
  border: '2px solid #002e63',
  color: '#002e63',
  fontFamily: 'Poppins',
  fontWeight: 'bolder',
  fontSize: '0.75rem',
  paddingInline: 35,
})
const StyledSubmitButton = styled(StyledButton)({
  backgroundColor: '#002e63',
  color: '#ffffff',
  width: '260px',
  marginTop: '40px',
  ':hover': {
    color: '#002e63',
  },
})

interface ButtonProps {
  name: string
}

export const MenuButton: React.FC<ButtonProps> = ({ name }) => {
  return <StyledButton>{name}</StyledButton>
}
export const SubmitButton: React.FC<ButtonProps> = ({ name }) => {
  return <StyledSubmitButton>{name}</StyledSubmitButton>
}
