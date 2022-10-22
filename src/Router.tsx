import { Routes, Route } from 'react-router-dom'
import { AllUsersTablePage } from './pages/AllUsersTablePage'
import { HomePage } from './pages/HomePage'
import { QuestionnairePage } from './pages/QuestionnairePage'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/questionnaire" element={<QuestionnairePage />} />
      <Route path="/allUsersTable" element={<AllUsersTablePage />} />
    </Routes>
  )
}
export default Router
