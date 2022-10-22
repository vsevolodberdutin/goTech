import { Box, styled } from '@mui/material'

export const NavigationHomeWrapper = styled(Box)({
  width: '100%',
  position: 'absolute',
})
export const NavigationWrapper = styled(NavigationHomeWrapper)({
  backgroundColor: 'white',
  boxShadow: '0px 0px 50px 0px rgb(0 0 0 / 20%)',
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
