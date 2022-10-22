import React from 'react'
import { Box, styled } from '@mui/material'

const CardWrapper = styled(Box)({
  borderRadius: 20,
  backgroundColor: '#ffffff',
  margin: '30px 160px 0',
  display: 'flex',
  alignItems: 'center',
  padding: '22.5px 30px',
  ':hover': {
    boxShadow: '-1px 7px 50px -10px rgb(0 0 0 / 10%)',
  },
})

interface CardProps {
  children: JSX.Element[] | JSX.Element
}

export const CustomCard: React.FC<CardProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>
}
