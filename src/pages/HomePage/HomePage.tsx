import React from 'react'
import { Box, Stack, styled } from '@mui/material'
import { ReactComponent as BGImage } from '../../assets/images/bg.svg'
import { Description, Header, SubHeader } from '../../uiElements/typography/CustomTypography'
import { CallToActionButton } from '../../uiElements/customButtons/CustomButtons'
import { GlobalWrapper } from '../../styles/styles'
import { HomeNavigation } from '../../components/Navigation/Navigation'

const HomeWrapper = styled(Box)({
  height: '100vh',
  width: '100vw',
})
const MainBlockWrapper = styled(Stack)({
  padding: '30vh  0 0 5vw',
})

export const HomePage = () => {
  return (
    <>
    <HomeNavigation/>
    <HomeWrapper>
      <BGImage style={{ position: 'absolute', top: '0', zIndex: '-1' }} />
      <GlobalWrapper>
      <MainBlockWrapper>
        <Header text='GoTech'/>
        <SubHeader text='Home assignment realization'/>
        <Description text='By Vsevolod Berdutin. For Frontend React Developer position'/>
        <CallToActionButton name='to questionary'/>
      </MainBlockWrapper>
      </GlobalWrapper>
    </HomeWrapper>
    </>
  )
}
