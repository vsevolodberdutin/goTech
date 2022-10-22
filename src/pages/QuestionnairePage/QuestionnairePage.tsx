import React from 'react'

import { HeaderBlock } from '../../components/HeaderBlock'
import { CheckBoxBlock } from '../../components/CheckBoxBlock'
import { CheckBoxOtherBlock } from '../../components/CheckBoxOtherBlock'
import { FreeQuestionBlock } from '../../components/FreeQuestionBlock'
import { NameBlock } from '../../components/NameBlock'

export const QuestionnairePage = () => {
  return (
    <>
      <HeaderBlock />
      <NameBlock />
      <CheckBoxBlock />
      <FreeQuestionBlock />
      <CheckBoxOtherBlock />
    </>
  )
}
