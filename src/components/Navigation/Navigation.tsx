import React from 'react'
import { ButtonWrapper, MenuWrapper, NavigationHomeWrapper, NavigationWrapper } from './styles'
import { ReactComponent as MainLogo } from '../../assets/logo/logo.svg'
import { GlobalWrapper } from '../../styles/styles'
import { MenuButton } from '../../uiElements/customButtons/CustomButtons'
import {useNavigate} from "react-router-dom"


// fast decision. Need to improve
export const HomeNavigation = () => {
  const navigate = useNavigate();
  return (
    <NavigationHomeWrapper>
      <GlobalWrapper>
        <MenuWrapper>
          <MainLogo style={{ height: '80px', cursor:'pointer' }} onClick={()=>navigate('/')}/>
          <ButtonWrapper>
            <MenuButton name="questionary" url="/questionary"/>
            <MenuButton name="show all users in table" url="/allUsersTable"/>
          </ButtonWrapper>
        </MenuWrapper>
      </GlobalWrapper>
    </NavigationHomeWrapper>
  )
}
export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <NavigationWrapper>
      <GlobalWrapper>
        <MenuWrapper>
          <MainLogo style={{ height: '80px', cursor:'pointer' }} onClick={()=>navigate('/')}/>
          <ButtonWrapper>
            <MenuButton name="questionary" url="/questionary"/>
            <MenuButton name="show all users in table" url="/allUsersTable"/>
          </ButtonWrapper>
        </MenuWrapper>
      </GlobalWrapper>
    </NavigationWrapper>
  )
}
