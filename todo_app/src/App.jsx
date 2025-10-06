import { Routes, Route } from 'react-router-dom'
import Form from "../Form"
import Todo_App from "../Todo_App"
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route
        path="/todo"
        element={
          <ProtectedRoute>
            <Todo_App />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
