import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import SelectionPage from './pages/SelectionPage';
import DoctorSignup from './pages/DoctorSignup';
import Verification from './pages/Verification'; 
import Dashboard from './pages/Dashboard'; // تأكد من استيراد الصفحة
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/select-role" element={<SelectionPage />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;