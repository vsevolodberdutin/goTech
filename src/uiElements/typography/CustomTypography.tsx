import React from 'react'
import { Button, styled, Typography } from '@mui/material'

const StyledHeader = styled(Typography)({
  color: '#070f1a',
  fontFamily: 'Heebo',
  fontWeight: 'bolder',
  fontSize: '3.75rem',
})
const StyledSubHeader = styled(StyledHeader)({
  fontWeight: 400,
  fontSize: '3rem',
  marginBottom:'10px',
})
const StyledDescription = styled(StyledHeader)({
  fontFamily: 'Poppins',
  fontWeight: 300,
  fontSize: '1rem',
  marginBottom:'5px',
})
const StyledRedDescription = styled(StyledDescription)({
  color: 'red',
})
const StyledHeaderDescription = styled(StyledDescription)({
  colorWeight: 'bolder',
})

interface textProps {
  text: string
}

export const Header = ({ text }: textProps) => {
  return <StyledHeader>{text}</StyledHeader>
}
export const SubHeader = ({ text }: textProps) => {
  return <StyledSubHeader>{text}</StyledSubHeader>
}
export const Description = ({ text }: textProps) => {
  return <StyledDescription>{text}</StyledDescription>
}
export const RedDescription = ({ text }: textProps) => {
  return <StyledRedDescription>{text}</StyledRedDescription>
}
export const HeaderDescription = ({ text }: textProps) => {
  return <StyledHeaderDescription>{text}</StyledHeaderDescription>
}
