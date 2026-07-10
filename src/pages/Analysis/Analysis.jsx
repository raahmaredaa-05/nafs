import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'; 
import ProfileHeader from '../../Components/Header/Header';

import './Analysis.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';


function Analysis() {
  return (
    <div className="analysis-layout-wrapper">
      
      
      <ProfileHeader />

      
      <div className="analysis-under-header-flex">
        
        
        <Sidebar activeTab="analysis" />

        
        <main className="analysis-content-area">
          <div className="analysis-internal-container">

            
         
<div className="analysis-section-box part-1 analysis-hero-section">
  <div className="hero-text-side">
    <h1 className="analysis-main-title">تحليلات الأداء والنتائج</h1>
    <p className="analysis-main-subtitle">نظرة شاملة على تقدم المرضى وفعالية الجلسات العلاجية.</p>
  </div>
  
  <div className="hero-timeframe-badge">
    <i className="fa-regular fa-calendar-days"></i>
    <span>آخر ٣٠ يوم</span>
  </div>
</div>

            
           
<div className="analysis-section-box part-2 analysis-stats-grid-container">
  
  
  <div className="analysis-gray-stat-card">
    <div className="stat-card-text">
      <span className="stat-label">متوسط تحسن المرضى</span>
      <h2 className="stat-number">٧٨٪</h2>
    </div>
    
    <div className="stat-mini-bars">
      <div className="mini-bar" style={{ height: '40%' }}></div>
      <div className="mini-bar" style={{ height: '65%' }}></div>
      <div className="mini-bar" style={{ height: '50%' }}></div>
      <div className="mini-bar active" style={{ height: '85%' }}></div>
    </div>
  </div>

  
  <div className="analysis-gray-stat-card">
    <div className="stat-card-text">
      <span className="stat-label">عدد الجلسات المنعقدة</span>
      <h2 className="stat-number">١٤٢</h2>
    </div>
    <div className="stat-card-icon-box">
      <i className="fa-solid fa-headset"></i>
    </div>
  </div>

  
  <div className="analysis-gray-stat-card feedback-card">
    <div className="stat-card-text">
      <span className="stat-label">تقييم رضى المرضى</span>
      <div className="rating-flex-row">
        <h2 className="stat-number">٤.٨</h2>
        <span className="out-of-five">/ ٥</span>
      </div>
      <p className="stat-subtext">بناءً على ٤٥ تقييم مجهول المصدر</p>
    </div>
  </div>

</div>

            
           
<div className="analysis-section-box part-3 analysis-chart-section">
  
  
  <div className="chart-section-header">
    <div className="chart-header-text">
      <h3 className="chart-box-title">اتجاهات الحالة المزاجية للمرضى</h3>
      <p className="chart-box-subtitle">متوسط الحالة المزاجية المبلغ عنها ذاتياً من قبل المرضى أسبوعياً.</p>
    </div>

    
    <div className="chart-mood-legends">
      <div className="legend-item">
        <span className="legend-dot happy-dot"></span>
        <span className="legend-label">سعيد</span>
      </div>
      <div className="legend-item">
        <span className="legend-dot calm-dot"></span>
        <span className="legend-label">هادئ</span>
      </div>
      <div className="legend-item">
        <span className="legend-dot anxious-dot"></span>
        <span className="legend-label">قلق</span>
      </div>
    </div>
  </div>

  
  <div className="main-line-chart-wrapper">
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={[
        { name: 'الأسبوع ١', happy: 65, calm: 45, anxious: 30 },
        { name: 'الأسبوع ٢', happy: 55, calm: 50, anxious: 40 },
        { name: 'الأسبوع ٣', happy: 70, calm: 60, anxious: 25 },
        { name: 'الأسبوع ٤', happy: 80, calm: 65, anxious: 15 },
      ]} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <XAxis dataKey="name" tick={{ fontFamily: 'Cairo', fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontFamily: 'Cairo', fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
        <Tooltip
          cursor={{ stroke: '#0f766e', strokeWidth: 1, strokeDasharray: '4 4' }}
          contentStyle={{ fontFamily: 'Cairo', borderRadius: '14px', direction: 'rtl', border: '1px solid #d6e9e6', boxShadow: '0 10px 30px rgba(15,118,110,0.15)', padding: '10px 14px' }}
          labelStyle={{ fontWeight: 800, color: '#0f766e', marginBottom: '6px' }}
        />
        
        
        <Line type="monotone" dataKey="happy" stroke="#0f766e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="calm" stroke="#83b9b5" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="anxious" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>

</div>

            
            
<div className="analysis-section-box part-4 analysis-two-columns-grid">

  <div className="analysis-gray-column-card">
    <div className="card-header-minimal">
      <h3 className="column-card-title">توزيع الحالات والاضطرابات</h3>
      <p className="column-card-subtitle">نسبة انتشار الأعراض بين المرضى الحالية.</p>
    </div>
    
    <div className="pie-chart-flex-container">
      <div className="pie-chart-graphics-side">
        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie
              data={[
                { name: 'قلق', value: 45 },
                { name: 'اكتئاب', value: 35 },
                { name: 'توتر', value: 20 }
              ]}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={65}
              paddingAngle={4}
              dataKey="value"
            >
              
              <Cell fill="#0f766e" /> 
              <Cell fill="#83b9b5" /> 
              <Cell fill="#a6cec5" /> 
            </Pie>
            <Tooltip contentStyle={{ fontFamily: 'Cairo', borderRadius: '8px', direction: 'rtl' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="pie-chart-legends-side">
        <div className="pie-legend-row">
          <span className="pie-dot" style={{ backgroundColor: '#0f766e' }}></span>
          <span className="pie-name">القلق</span>
          <span className="pie-percentage">٤٥٪</span>
        </div>
        <div className="pie-legend-row">
          <span className="pie-dot" style={{ backgroundColor: '#83b9b5' }}></span>
          <span className="pie-name">الاكتئاب</span>
          <span className="pie-percentage">٣٥٪</span>
        </div>
        <div className="pie-legend-row">
          <span className="pie-dot" style={{ backgroundColor: '#a6cec5' }}></span>
          <span className="pie-name">التوتر</span>
          <span className="pie-percentage">٢٠٪</span>
        </div>
      </div>
    </div>
  </div>

  
  <div className="analysis-gray-column-card">
    <div className="card-header-with-legends">
      <div className="card-header-minimal">
        <h3 className="column-card-title">أداء الجلسات حسب النوع</h3>
        <p className="column-card-subtitle">مقارنة المؤشرات بين العلاج الفردي والجماعي.</p>
      </div>
      
      
      <div className="session-type-legends">
        <div className="type-legend-item">
          <span className="type-dot" style={{ backgroundColor: '#0f766e', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }}></span>
          <span className="type-label">فردي</span>
        </div>
        <div className="type-legend-item">
          <span className="type-dot" style={{ backgroundColor: '#83b9b5', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }}></span>
          <span className="type-label">جماعي</span>
        </div>
      </div>
    </div>

    
    <div className="metrics-bars-list">
      
      
      <div className="metric-progress-wrapper">
        <div className="metric-info-row">
          <span className="metric-name">الحضور والإلتزام</span>
          <span className="metric-ratio">٦٥٪ فردي / ٣٥٪ جماعي</span>
        </div>
        <div className="split-progress-bar">
          <div className="progress-segment" style={{ width: '65%', backgroundColor: '#0f766e' }}></div>
          <div className="progress-segment" style={{ width: '35%', backgroundColor: '#83b9b5' }}></div>
        </div>
      </div>

      
      <div className="metric-progress-wrapper">
        <div className="metric-info-row">
          <span className="metric-name">مدى التحسن الملحوظ</span>
          <span className="metric-ratio">٥٥٪ فردي / ٤٥٪ جماعي</span>
        </div>
        <div className="split-progress-bar">
          <div className="progress-segment" style={{ width: '55%', backgroundColor: '#0f766e' }}></div>
          <div className="progress-segment" style={{ width: '45%', backgroundColor: '#83b9b5' }}></div>
        </div>
      </div>

      
      <div className="metric-progress-wrapper">
        <div className="metric-info-row">
          <span className="metric-name">تقييم الرضا</span>
          <span className="metric-ratio">٧٠٪ فردي / ٣٠٪ جماعي</span>
        </div>
        <div className="split-progress-bar">
          <div className="progress-segment" style={{ width: '70%', backgroundColor: '#0f766e' }}></div>
          <div className="progress-segment" style={{ width: '30%', backgroundColor: '#83b9b5' }}></div>
        </div>
      </div>

    </div>
  </div>

</div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Analysis;