import { Routes, Route } from 'react-router-dom'
import { AllUsersTablePage } from './pages/AllUsersTablePage'
import { HomePage } from './pages/HomePage'
import { QuestionaryPage } from './pages/QuestionaryPage'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/questionary" element={<QuestionaryPage />} />
      <Route path="/allUsersTable" element={<AllUsersTablePage />} />
    </Routes>
  )
}
export default Router
