import React from 'react'
import { ButtonWrapper, MenuWrapper, NavigationHomeWrapper, NavigationWrapper } from './styles'
import { ReactComponent as MainLogo } from '../../assets/logo/logo.svg'
import { GlobalWrapper } from '../../styles/styles'
import { MenuButton } from '../../uiElements/customButtons/CustomButtons'

export const HomeNavigation = () => {
  return (
    <NavigationHomeWrapper>
      <GlobalWrapper>
        <MenuWrapper>
          <MainLogo style={{ height: '80px' }} />
          <ButtonWrapper>
            <MenuButton name="questionary" />
            <MenuButton name="show all users in table" />
          </ButtonWrapper>
        </MenuWrapper>
      </GlobalWrapper>
    </NavigationHomeWrapper>
  )
}
export const Navigation = () => {
  return (
    <NavigationWrapper>
      <GlobalWrapper>
        <MenuWrapper>
          <MainLogo style={{ height: '80px' }} />
          <ButtonWrapper>
            <MenuButton name="questionary" />
            <MenuButton name="show all users in table" />
          </ButtonWrapper>
        </MenuWrapper>
      </GlobalWrapper>
    </NavigationWrapper>
  )
}
