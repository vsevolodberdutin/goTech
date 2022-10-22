import React from 'react'
import { NavigationWrapper, StyledTypography } from './styles'
import { ReactComponent as MainLogo } from '../../assets/logo/logo.svg'
import { GlobalWrapper } from '../../styles/styles'

export const Navigation = () => {
  return (
    <NavigationWrapper>
    <GlobalWrapper>
      <StyledTypography>Navigation</StyledTypography>
      {/* <MainLogo /> */}
    </GlobalWrapper>
    </NavigationWrapper>
  )
}
