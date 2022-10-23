import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
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
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'

const QuestionaryWrapper = styled(Stack)({
  paddingTop: '100px',
  backgroundColor: '#f2f4f8',
})

const SubmitButtonWrapper = styled(Stack)({
  padding: '0 160px 40px',
})

export interface UserRegistrationModel {
  id: number
  name: string
  language: string
  optionalText: string
  difficulty: string
}

export const QuestionaryPage = () => {
  const [inputs, setInputs] = useState({
    id: 0,
    name: '',
    language: '',
    optionalText: '',
    difficulty: '',
  })
  const navigate = useNavigate()
  const unique_id = parseInt(uuid())

  const postData = async (userData: UserRegistrationModel) => {
    await axios.post<
      UserRegistrationModel,
      AxiosResponse<{ accessToken: string }>
    >('http://localhost:3001/questionnaires', userData)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const userData = { ...inputs, id: unique_id }
    if (!inputs.name) {
      alert('input name!')
    }
    if (!inputs.language) {
      alert('input language!')
    } else {
      postData(userData)
      navigate('/allUsersTable')
    }
  }

  return (
    <>
      <Navigation />
      <QuestionaryWrapper>
        <GlobalWrapper>
          <form onSubmit={handleSubmit}>
            <CustomCard children={<HeaderBlock />} />
            <CustomCard
              children={
                <NameBlock value={inputs.name} onChange={handleChange} />
              }
            />
            <CustomCard
              children={
                <CheckBoxBlock
                  value={inputs.language}
                  onChange={handleChange}
                />
              }
            />
            <CustomCard
              children={
                <FreeQuestionBlock
                  value={inputs.optionalText}
                  onChange={handleChange}
                />
              }
            />
            <CustomCard
              children={
                <CheckBoxOtherBlock
                  value={inputs.difficulty}
                  onChange={handleChange}
                />
              }
            />
            <SubmitButtonWrapper>
              <SubmitButton name="Submit" />
            </SubmitButtonWrapper>
          </form>
        </GlobalWrapper>
      </QuestionaryWrapper>
    </>
  )
}
