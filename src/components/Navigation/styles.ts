import { Box, Container, styled, Typography } from '@mui/material'

export const NavigationHomeWrapper = styled(Box)({
  width: '100vw',
  position: 'absolute',
})
export const NavigationWrapper = styled(NavigationHomeWrapper)({
  backgroundColor:'white',
  boxShadow: '-1px 7px 50px -10px rgb(0 0 0 / 20%)',
})

export const MenuWrapper = styled(Box)({
  height: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
export const ButtonWrapper = styled(Box)({
  width: '410px',
  display: 'flex',
  justifyContent: 'space-between',
})
