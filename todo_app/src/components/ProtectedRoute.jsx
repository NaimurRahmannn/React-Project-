import { Navigate } from 'react-router-dom';

const isAuthed = () => {
  try {
    return sessionStorage.getItem('auth') === 'true';
  } catch {
    return false;
  }
};

export default function ProtectedRoute({ children }) {
  return isAuthed() ? children : <Navigate to="/" replace />;
}
