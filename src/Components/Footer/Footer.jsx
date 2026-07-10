import { Home, Flower, Compass, MessageSquare, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer({ activeTab }) {
  const navigate = useNavigate();
  const navItems = [
    { id: "home", label: "الرئيسية", icon: Home, path: "/doctor/dashboard" },
    { id: "sessions", label: "جلساتي", icon: Flower, path: "/doctor/sessions" },
    { id: "discover", label: "اكتشف", icon: Compass, path: "/doctor/library" },
    { id: "chats", label: "محادثات", icon: MessageSquare, path: "/doctor/chats" },
    { id: "profile", label: "حسابي", icon: User, path: "/doctor/profile" },
  ];

  return (
    <footer className="main-footer">
      <nav className="footer-nav">
        {navItems.map(({ id, label, icon: Icon, path }) => (
          <button
            key={id}
            type="button"
            className={`nav-item ${activeTab === id ? "active" : ""}`}
            title={label}
            onClick={() => navigate(path)}
          >
            <div className="icon-circle">
              <Icon size={22} strokeWidth={activeTab === id ? 2 : 1.5} />
            </div>
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
