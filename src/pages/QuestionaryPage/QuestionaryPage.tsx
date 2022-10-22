import React from 'react'

import { HeaderBlock } from '../../components/HeaderBlock'
import { CheckBoxBlock } from '../../components/CheckBoxBlock'
import { CheckBoxOtherBlock } from '../../components/CheckBoxOtherBlock'
import { FreeQuestionBlock } from '../../components/FreeQuestionBlock'
import { NameBlock } from '../../components/NameBlock'
import { GlobalWrapper } from '../../styles/styles'
import { Stack, styled } from '@mui/material'
import { CustomCard } from '../../uiElements/cards/CustomCards'
import { Navigation } from '../../components/Navigation/Navigation'

const QuestionaryWrapper = styled(Stack)({
  paddingTop: '100px',
  minHeight: '85vh',
  backgroundColor: '#f2f4f8',
})

export const QuestionaryPage = () => {
  return (
    <>
      <Navigation />
      <QuestionaryWrapper>
        <GlobalWrapper>
          <CustomCard children={<HeaderBlock />} />
          <CustomCard children={<NameBlock />} />
          <CustomCard children={<CheckBoxBlock />} />
          <CustomCard children={<FreeQuestionBlock />} />
          <CustomCard children={<CheckBoxOtherBlock />} />
        </GlobalWrapper>
      </QuestionaryWrapper>
    </>
  )
}
