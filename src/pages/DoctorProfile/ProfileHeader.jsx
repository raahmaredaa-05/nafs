import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileHeader.css";

function ProfileHeader() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="profile-header">
      

      
      <div className="header-left-side">
        <button type="button" className="brand-name" onClick={() => navigate("/doctor/dashboard")}>نفس</button>
        <button
          className="profile-icon-btn back-btn"
          onClick={handleBack}
          title="رجوع"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="header-right-side">
        <button className="profile-icon-btn" title="حفظ في المفضلة">
          <i className="fa-regular fa-heart"></i>
        </button>
        <button className="profile-icon-btn" title="مشاركة">
          <i className="fa-solid fa-share-nodes"></i>
        </button>
      </div>
    </header>
  );
}

export default ProfileHeader;
