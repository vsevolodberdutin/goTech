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
})
const StyledDescription = styled(StyledHeader)({
  fontFamily: 'Poppins',
  fontWeight: 300,
  fontSize: '1rem',
})

export const Header: any = ({ text }: any) => {
  return <StyledHeader>{text}</StyledHeader>
}
export const SubHeader: any = ({ text }: any) => {
  return <StyledSubHeader>{text}</StyledSubHeader>
}
export const Description: any = ({ text }: any) => {
  return <StyledDescription>{text}</StyledDescription>
}
