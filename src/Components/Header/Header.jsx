import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <button type="button" className="header-logo" onClick={() => navigate("/doctor/dashboard")}>نفس</button>

      <div className="header-icons">
        <button type="button" className="icon-wrapper" title="الإشعارات">
          <Bell size={24} strokeWidth={1.5} />
        </button>
        <button type="button" className="icon-wrapper" title="الملف الشخصي" onClick={() => navigate("/doctor/profile")}>
          <User size={24} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}

export default Header;
