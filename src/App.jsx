import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import SelectionPage from './pages/SelectionPage';
import DoctorSignup from './pages/DoctorSignup';
import Verification from './pages/Verification'; 
import Dashboard from './pages/Dashboard'; 
import DoctorCheckoutPage from './pages/DoctorCheckoutPage';
import Payments from './pages/Payments';
import UserSignup from './pages/UserSignup'; // تم تعديل المسار هنا لـ ./pages/UserSignup

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/select-role" element={<SelectionPage />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />
        
        {/* مسار الأفراد الصحيح */}
        <Route path="/user-signup" element={<UserSignup />} />
        
        <Route path="/verification" element={<Verification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Doctor Checkout Route */}
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
        
      </Routes>
    </Router>
  );
}

export default App;