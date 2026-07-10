import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import SelectionPage from './pages/SelectionPage';
import DoctorSignup from './pages/DoctorSignup';
import Verification from './pages/Verification';
import Dashboard from './pages/Dashboard';
import DoctorCheckoutPage from './pages/DoctorCheckoutPage';
import Payments from './pages/Payments';
import UserSignup from './pages/UserSignup';

import DoctorProfile from './pages/DoctorProfile/DoctorProfile';
import DoctorWork from './pages/DoctorWork/DoctorWork';
import PatientProfile from './pages/PatientProfile/PatientProfile';
import Patients from './pages/Patients/Patients';
import Meetings from './pages/Meetings/Meetings';
import Sessions from './pages/Sessions/Sessions';
import TimeTable from './pages/TimeTable/TimeTable';
import Chats from './pages/Chats/Chats';
import Library from './pages/Library/Library';
import Analysis from './pages/Analysis/Analysis';
import QuizPage from './Components/QuizPage/QuizPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/select-role" element={<SelectionPage />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/DoctorCheckoutPage" element={<DoctorCheckoutPage />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/payments" element={<Payments />} />

        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/doctor-work" element={<DoctorWork />} />
        <Route path="/patient-profile" element={<PatientProfile />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/library" element={<Library />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </Router>
  );
}

export default App;
