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
import AllArticles from './pages/AllArticles/AllArticles';
import AllReviews from './pages/AllReviews/AllReviews';
import ProfileProgress from './pages/ProfileProgress/ProfileProgress';

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

        <Route path="/doctor-checkout" element={<DoctorCheckoutPage />} />
        <Route path="/DoctorCheckoutPage" element={<Navigate to="/doctor-checkout" replace />} />
        <Route path="/Payments" element={<Navigate to="/payments" replace />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/my-sessions" element={<Navigate to="/dashboard" replace state={{ targetTab: 'sessions' }} />} />

        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/all-articles" element={<AllArticles />} />
        <Route path="/all-reviews" element={<AllReviews />} />
        <Route path="/profile-progress" element={<ProfileProgress />} />
        <Route path="/doctor" element={<Navigate to="/doctor/dashboard" replace />} />
        <Route path="/doctor/dashboard" element={<DoctorWork />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/doctor/patient-profile" element={<PatientProfile />} />
        <Route path="/doctor/patients" element={<Patients />} />
        <Route path="/doctor/meetings" element={<Meetings />} />
        <Route path="/doctor/sessions" element={<Sessions />} />
        <Route path="/doctor/timetable" element={<TimeTable />} />
        <Route path="/doctor/chats" element={<Chats />} />
        <Route path="/doctor/library" element={<Library />} />
        <Route path="/doctor/analysis" element={<Analysis />} />

        <Route path="/doctor-profile" element={<Navigate to="/doctor/profile" replace />} />
        <Route path="/doctor-work" element={<Navigate to="/doctor/dashboard" replace />} />
        <Route path="/patient-profile" element={<Navigate to="/doctor/patient-profile" replace />} />
        <Route path="/patients" element={<Navigate to="/doctor/patients" replace />} />
        <Route path="/meetings" element={<Navigate to="/doctor/meetings" replace />} />
        <Route path="/sessions" element={<Navigate to="/doctor/sessions" replace />} />
        <Route path="/timetable" element={<Navigate to="/doctor/timetable" replace />} />
        <Route path="/chats" element={<Navigate to="/doctor/chats" replace />} />
        <Route path="/library" element={<Navigate to="/doctor/library" replace />} />
        <Route path="/analysis" element={<Navigate to="/doctor/analysis" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
