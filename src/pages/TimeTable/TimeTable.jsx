import React, { useState } from 'react';
import ProfileHeader from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useSchedule, acceptSession, addAvailability } from '../../store/scheduleStore';
import './TimeTable.css';

const WEEK_DAYS = [
  { name: 'السبت', date: '04 يوليو' },
  { name: 'الأحد', date: '05 يوليو' },
  { name: 'الإثنين', date: '06 يوليو' },
  { name: 'الثلاثاء', date: '07 يوليو' },
  { name: 'الأربعاء', date: '08 يوليو' },
  { name: 'الخميس', date: '09 يوليو' },
];

const TODAY = 'السبت';

function TimeTable() {
  const { sessions, availability } = useSchedule();
  const [calendarView, setCalendarView] = useState('week');
  const [showAddModal, setShowAddModal] = useState(false);
  const [form, setForm] = useState({ day: 'السبت', from: '', to: '' });

  const [requests, setRequests] = useState([
    { id: 'tr1', name: 'نهى محمود', note: 'يرغب في حجز أول جلسة استشارية للتعامل مع القلق الوظيفي.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100', day: 'الأربعاء', date: '08 يوليو', time: '05:00 م', sessionType: 'أونلاين' },
  ]);

  const visibleDays =
    calendarView === 'day' ? WEEK_DAYS.filter((d) => d.name === TODAY) : WEEK_DAYS;

  const todaySessions = sessions.filter((s) => s.day === TODAY);

  const handleAcceptRequest = (req) => {
    acceptSession({ patient: req.name, day: req.day, date: req.date, time: req.time, type: req.sessionType });
    setRequests((prev) => prev.filter((r) => r.id !== req.id));
  };

  const handleAddAvailability = (e) => {
    e.preventDefault();
    if (!form.from || !form.to) return;
    const dayMeta = WEEK_DAYS.find((d) => d.name === form.day);
    addAvailability({ day: form.day, date: dayMeta?.date || '', from: form.from, to: form.to });
    setForm({ day: 'السبت', from: '', to: '' });
    setShowAddModal(false);
  };

  return (
    <div className="timetable-page">
      <ProfileHeader />

      <main className="doctor-work-main">
        <Sidebar activeTab="timetable" />

        <div className="doctor-work-container">
          <section className="content-area">
            <div className="timetable-wrapper">

              <div className="timetable-header-wrapper">
                <div className="doctor-welcome-meta">
                  <h2 className="welcome-doctor-title">مرحباً د. مريم خالد</h2>
                  <p className="today-sessions-count">
                    لديك <span className="highlight-count">{todaySessions.length} جلسات</span> مجدولة اليوم.
                  </p>
                </div>
                <div className="timetable-quick-actions">
                  <button className="add-today-session-btn" onClick={() => setShowAddModal(true)}>
                    <i className="fa-solid fa-plus"></i>
                    <span>إضافة توفر جديد</span>
                  </button>
                </div>
              </div>

              <div className="timetable-content-layout">
                <div className="calendar-two-thirds-zone">
                  <div className="calendar-control-bar">
                    <div className="calendar-current-date-label">
                      <i className="fa-regular fa-calendar"></i>
                      <span>يوليو 2026</span>
                    </div>

                    <div className="calendar-view-switcher">
                      <button className={`view-btn ${calendarView === 'day' ? 'active' : ''}`} onClick={() => setCalendarView('day')}>يوم</button>
                      <button className={`view-btn ${calendarView === 'week' ? 'active' : ''}`} onClick={() => setCalendarView('week')}>أسبوع</button>
                      <button className={`view-btn ${calendarView === 'month' ? 'active' : ''}`} onClick={() => setCalendarView('month')}>شهر</button>
                    </div>
                  </div>

                  <div className={`week-view-container ${calendarView === 'month' ? 'is-month' : ''} ${calendarView === 'day' ? 'is-day' : ''}`}>
                    {visibleDays.map((dayItem, idx) => {
                      const daySessions = sessions.filter((s) => s.day === dayItem.name);
                      const dayAvail = availability.filter((a) => a.day === dayItem.name);

                      return (
                        <div key={idx} className="calendar-day-column">
                          <div className="column-date-header">
                            <span className="day-title">{dayItem.name}</span>
                            <span className="day-numeric-date">{dayItem.date}</span>
                          </div>

                          <div className="column-sessions-body">
                            {daySessions.map((session, sIdx) => (
                              <div key={sIdx} className={`calendar-session-card ${session.type === 'أونلاين' ? 'is-online' : 'is-person'}`}>
                                <span className="session-card-time">{session.time}</span>
                                <span className="session-card-patient">{session.patient}</span>
                                <span className="session-card-type">{session.type}</span>
                              </div>
                            ))}

                            {dayAvail.map((slot) => (
                              <div key={slot.id} className="calendar-session-card is-available">
                                <span className="session-card-time">{slot.from} - {slot.to}</span>
                                <span className="session-card-patient">وقت متاح للحجز</span>
                                <span className="session-card-type">متاح</span>
                              </div>
                            ))}

                            {daySessions.length === 0 && dayAvail.length === 0 && (
                              <div className="no-sessions-placeholder">لا يوجد جلسات</div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="sidebar-one-third-zone">
                  <div className="agenda-box">
                    <div className="agenda-header">
                      <h3><i className="fa-regular fa-clock"></i> أجندة اليوم</h3>
                      <span className="agenda-count-badge">{todaySessions.length} جلسات</span>
                    </div>

                    <div className="agenda-patients-list">
                      {todaySessions.length === 0 && (
                        <p className="no-sessions-placeholder">لا يوجد جلسات اليوم</p>
                      )}
                      {todaySessions.map((s) => (
                        <div className="agenda-patient-item" key={s.id}>
                          <div className="patient-agenda-meta">
                            <span className="patient-agenda-name">{s.patient}</span>
                            <span className="patient-agenda-time">{s.time}</span>
                          </div>
                          <div className={`session-type-icon-wrapper ${s.type === 'أونلاين' ? 'online' : 'in-person'}`} title={`جلسة ${s.type}`}>
                            <i className={`fa-solid ${s.type === 'أونلاين' ? 'fa-video' : 'fa-house-user'}`}></i>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="new-requests-box">
                    <div className="requests-header">
                      <h3>طلبات جديدة</h3>
                    </div>

                    {requests.length === 0 && (
                      <p className="no-sessions-placeholder">لا توجد طلبات جديدة</p>
                    )}

                    {requests.map((req) => (
                      <div className="request-item-card" key={req.id}>
                        <div className="request-patient-profile">
                          <div className="request-avatar-wrapper">
                            <img src={req.img} alt="صورة المريض" className="request-patient-img" />
                          </div>
                          <div className="request-patient-meta">
                            <h4 className="request-patient-name">{req.name}</h4>
                            <span className="request-time-ago">{req.day} {req.time}</span>
                          </div>
                        </div>

                        <div className="request-content-text">
                          <p>{req.note}</p>
                        </div>

                        <div className="request-actions-row">
                          <button className="request-btn accept-btn" onClick={() => handleAcceptRequest(req)}>قبول</button>
                          <button className="request-btn reject-btn" onClick={() => setRequests((p) => p.filter((r) => r.id !== req.id))}>رفض</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {showAddModal && (
        <div className="availability-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="availability-modal" onClick={(e) => e.stopPropagation()}>
            <div className="availability-modal-header">
              <h3>إضافة توفر جديد</h3>
              <button className="modal-close-btn" onClick={() => setShowAddModal(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <form className="availability-form" onSubmit={handleAddAvailability}>
              <label className="availability-field">
                <span>اليوم</span>
                <select value={form.day} onChange={(e) => setForm({ ...form, day: e.target.value })}>
                  {WEEK_DAYS.map((d) => (
                    <option key={d.name} value={d.name}>{d.name} - {d.date}</option>
                  ))}
                </select>
              </label>

              <div className="availability-time-row">
                <label className="availability-field">
                  <span>من</span>
                  <input type="time" value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })} required />
                </label>
                <label className="availability-field">
                  <span>إلى</span>
                  <input type="time" value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} required />
                </label>
              </div>

              <button type="submit" className="availability-submit-btn">إضافة إلى الجدول</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TimeTable;
