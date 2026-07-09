import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import SelectionPage from './pages/SelectionPage';
import DoctorSignup from './pages/DoctorSignup';
import Verification from './pages/Verification'; 
import Dashboard from './pages/Dashboard'; 
import DoctorCheckoutPage from './pages/DoctorCheckoutPage';
import Payments from './pages/Payments';
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
<Route 
  path="/DoctorCheckoutPage" 
  element={
   <DoctorCheckoutPage 
  doctorData={{
    name: "د. فيصل العمر",
    specialty: "استشاري الطب النفسي",
    rating: "4.9",
    reviewsCount: "120",
    location: "الرياض",
    price: "250",
    bio: "نص تجريبي...",
    imageUrl: "...",
    specialties: [], 
    reviews: []      
  }} 
/>
  } 
/>   
<Route path="/Payments" element={<Payments />} />
<Route path="/auth" element={<Auth />} />
   </Routes>
    </Router>
  );
}

export default App;