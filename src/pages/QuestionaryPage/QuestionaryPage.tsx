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
import { SubmitButton } from '../../uiElements/customButtons/CustomButtons'

const QuestionaryWrapper = styled(Stack)({
  paddingTop: '100px',
  backgroundColor: '#f2f4f8',
})

const SubmitButtonWrapper = styled(Stack)({
  padding: '0 160px 40px',
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
          <SubmitButtonWrapper>
            <SubmitButton name="Submit" />
          </SubmitButtonWrapper>
        </GlobalWrapper>
      </QuestionaryWrapper>
    </>
  )
}
