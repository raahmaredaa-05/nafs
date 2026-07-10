import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileHeader from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../components/layout/Footer';
import './Library.css';
import myImage from '../../assets/sara.png';

const filters = ["الكل", "تأملات موجهة", "دروس مرئية", "مقالات علمية"];

const LINKS = {
  mainVideo: "https://www.youtube.com/watch?v=uxayUBd6T7M",
  meditation: "https://www.youtube.com/watch?v=1ZYbU82GVz4",
  journaling: "https://www.verywellmind.com/the-benefits-of-journaling-for-stress-management-3144611",
  yoga: "https://www.verywellmind.com/the-benefits-of-yoga-for-mental-health-5323375",
  impostor: "https://www.verywellmind.com/imposter-syndrome-and-social-anxiety-disorder-4156469",
  boundaries: "https://www.verywellmind.com/how-to-set-boundaries-5208591",
  resilience: "https://www.verywellmind.com/what-is-resilience-2795059",
};

function Library() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("الكل");

  const show = (cat) => activeFilter === "الكل" || activeFilter === cat;

  return (
    <div className="library-page">
      <ProfileHeader />

      <main className="library-main-content">
        <Sidebar activeTab="library" />
        <div className="library-container">

          <div className="library-hero-creative-zone">
            <div className="library-hero-text-side">
              <h1 className="library-main-huge-title">مكتبة المصادر</h1>
              <p className="library-hero-description">
                مساحتك الهادئة للاستكشاف. تصفح مجموعة مختارة من التأملات الموجهة، والدروس المرئية، والمقالات العلمية لتعزيز صحتك النفسية.
              </p>
            </div>

            <div className="library-hero-visual-side">
              <div className="tilted-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600"
                  alt="جلسة هدوء العقل"
                  className="tilted-hero-img"
                />
                <div className="floating-selected-session-box">
                  <span className="session-tag">جلسة اليوم المختارة:</span>
                  <h4 className="session-title">"هدوء العقل"</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="library-content-filter-bar">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`library-filter-btn ${activeFilter === filter ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "الكل" && <i className="fa-solid fa-grid-2"></i>}
                {filter === "تأملات موجهة" && <i className="fa-solid fa-spa"></i>}
                {filter === "دروس مرئية" && <i className="fa-solid fa-circle-play"></i>}
                {filter === "مقالات علمية" && <i className="fa-solid fa-book-open"></i>}
                <span>{filter}</span>
              </button>
            ))}
          </div>

          <div className="library-split-zone-two-columns">

            {show("دروس مرئية") && (
              <div className="video-main-display-column">
                <a
                  className="main-video-player-wrapper"
                  href={LINKS.mainVideo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800"
                    alt="أساسيات التنفس العميق للتوتر"
                    className="video-placeholder-cover"
                  />
                  <div className="video-play-overlay-btn">
                    <i className="fa-solid fa-play"></i>
                  </div>
                </a>

                <div className="video-meta-top-row">
                  <span className="video-type-label">فيديو تعليمي</span>
                  <span className="video-duration-badge">
                    <i className="fa-regular fa-clock"></i> ١٥ دقيقة
                  </span>
                </div>

                <div className="video-description-block">
                  <h2 className="video-main-title">أساسيات التنفس العميق للتوتر</h2>
                  <p className="video-main-text">
                    تعرف على التقنيات العلمية للتحكم في استجابة جسدك للضغوطات اليومية من خلال تمارين التنفس البسيطة.
                  </p>
                </div>
              </div>
            )}

            <div className="left-side-display-column">

              {show("تأملات موجهة") && (
                <div className="suggested-meditation-card">
                  <div className="meditation-card-text-content">
                    <span className="meditation-badge-tag">تأمل مقترح</span>
                    <h3 className="meditation-card-title">النوم العميق الهادئ</h3>
                    <p className="meditation-card-p">
                      جلسة تأمل صوتية لمساعدتك على الاسترخاء قبل النوم مباشرة.
                    </p>
                    <a href={LINKS.meditation} target="_blank" rel="noreferrer" className="meditation-listen-link">
                      <span>استمع الآن</span>
                      <i className="fa-solid fa-arrow-left font-arrow-icon"></i>
                    </a>
                  </div>

                  <div className="meditation-card-visual-content">
                    <div className="meditation-tilted-img-frame">
                      <img src={myImage} alt="النوم العميق الهادئ" className="meditation-tilted-img" />
                    </div>
                  </div>
                </div>
              )}

              {show("مقالات علمية") && (
                <div className="two-equal-boxes-row">
                  <a className="mini-article-card" href={LINKS.journaling} target="_blank" rel="noreferrer">
                    <div className="mini-card-image-box">
                      <img src="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=400" alt="قوة تدوين المشاعر" />
                    </div>
                    <div className="mini-card-body">
                      <h4 className="mini-card-title">قوة تدوين المشاعر</h4>
                      <p className="mini-card-description">لماذا ينصح الأطباء النفسيون بالكتابة اليومية لتخفيف القلق؟</p>
                      <div className="mini-card-footer">
                        <span className="mini-card-time"><i className="fa-regular fa-clock"></i> ٤ دقائق قراءة</span>
                        <span className="save-icon-btn" title="حفظ المقال"><i className="fa-regular fa-bookmark"></i></span>
                      </div>
                    </div>
                  </a>

                  <a className="mini-article-card" href={LINKS.yoga} target="_blank" rel="noreferrer">
                    <div className="mini-card-image-box">
                      <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400" alt="اليوجا كعلاج مكمل" />
                    </div>
                    <div className="mini-card-body">
                      <h4 className="mini-card-title">اليوجا كعلاج مكمل</h4>
                      <p className="mini-card-description">كيف تساعد الحركة الواعية في إعادة توازن الجهاز العصبي.</p>
                      <div className="mini-card-footer">
                        <span className="mini-card-time"><i className="fa-regular fa-clock"></i> ٦ دقائق قراءة</span>
                        <span className="save-icon-btn" title="حفظ المقال"><i className="fa-regular fa-bookmark"></i></span>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {show("مقالات علمية") && (
            <div className="library-recommended-articles-section">
              <div className="section-header-flex">
                <div className="header-titles">
                  <h2 className="section-main-title">مقالات تهمك</h2>
                  <p className="section-sub-title">تعمق في مواضيع الصحة النفسية مع خبرائنا</p>
                </div>
                <button className="view-all-link" onClick={() => navigate('/all-articles')}>
                  <span>مشاهدة الكل</span>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              </div>

              <div className="three-articles-grid">
                <a className="recommended-article-card" href={LINKS.impostor} target="_blank" rel="noreferrer">
                  <div className="rec-card-image-box">
                    <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500" alt="متلازمة المحتال" />
                  </div>
                  <div className="rec-card-body">
                    <span className="rec-card-badge">الوعي الذاتي</span>
                    <h3 className="rec-card-title">كيف تتعامل مع "متلازمة المحتال" في العمل؟</h3>
                    <p className="rec-card-description">نصائح عملية لاستعادة الثقة بالنفس والاعتراف بإنجازاتك الحقيقية.</p>
                  </div>
                </a>

                <a className="recommended-article-card" href={LINKS.boundaries} target="_blank" rel="noreferrer">
                  <div className="rec-card-image-box">
                    <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500" alt="التوازن النفسي" />
                  </div>
                  <div className="rec-card-body">
                    <span className="rec-card-badge">الوعي الذاتي</span>
                    <h3 className="rec-card-title">ترتيب الأولويات وقول "لا" دون شعور بالذنب</h3>
                    <p className="rec-card-description">خطوات بسيطة لحماية مساحتك النفسية وطاقتك اليومية من الاستنزاف.</p>
                  </div>
                </a>

                <a className="recommended-article-card" href={LINKS.resilience} target="_blank" rel="noreferrer">
                  <div className="rec-card-image-box">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500" alt="المرونة النفسية" />
                  </div>
                  <div className="rec-card-body">
                    <span className="rec-card-badge">الوعي الذاتي</span>
                    <h3 className="rec-card-title">بناء المرونة النفسية في مواجهة التغيرات المفاجئة</h3>
                    <p className="rec-card-description">كيف تدرب عقلك على التكيف مع ظروف الحياة المتغيرة بمرونة وهدوء.</p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer activeTab="explore" />
    </div>
  );
}

export default Library;
