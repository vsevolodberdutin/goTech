import React from 'react'
import { Stack, styled } from '@mui/material'
import { HeaderTableBlock } from '../../components/HeaderTableBlock'
import { GlobalWrapper } from '../../styles/styles'
import { CustomCard, CustomTableCard } from '../../uiElements/cards/CustomCards'
import { Navigation } from '../../components/Navigation/Navigation'
import { TableBlock } from '../../components/TableBlock'

const AllUsersTableWrapper = styled(Stack)({
  paddingTop: '100px',
  backgroundColor: '#f2f4f8',
})

export const AllUsersTablePage = () => {
  return (
    <>
      <Navigation />
      <AllUsersTableWrapper>
        <GlobalWrapper>
          <CustomCard children={<HeaderTableBlock />} />
          <CustomTableCard children={<TableBlock />} />
        </GlobalWrapper>
      </AllUsersTableWrapper>
    </>
  )
}
