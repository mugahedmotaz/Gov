import './News.css';
import BackButton from '../components/BackButton';

// الأخبار
const newsList = [
  {
    title: 'وزير الداخلية يلتقي نائب المدير القطري لمكتب المفوضية السامية لحقوق الإنسان بالسودان',
    date: '2025-07-01',
    image: '/vite.svg',
  },
  {
    title: 'مرور الخرطوم تُزيل المركبات المهجورة من كباري العاصمة',
    date: '2025-06-28',
    image: '/vite.svg',
  },
  {
    title: 'الإدارة العامة للمرور تباشر ترحيل طلاب الشهادة السودانية',
    date: '2025-06-25',
    image: '/vite.svg',
  },
  {
    title: 'إكتمال إجراءات التسليم والتسلم بين وزيري الداخلية',
    date: '2025-06-20',
    image: '/vite.svg',
  },
];

const suggestions = [
  'إضافة خاصية التعليق على الأخبار.',
  'إتاحة مشاركة الأخبار على وسائل التواصل الاجتماعي.',
  'إضافة أرشيف للأخبار القديمة مع خاصية البحث.',
  'دعم الأخبار المصورة والفيديو.',
];

const News = () => {
  return (
    <div className="news-page" dir="rtl">
      <BackButton />
      <header className="news-header">
        <h1>آخر الأخبار</h1>
        <p>تابع أحدث أخبار وزارة الداخلية السودانية</p>
      </header>
      <section className="news-list">
        {newsList.map((news, idx) => (
          <div className="news-card" key={idx}>
            <img src={news.image} alt="news" className="news-img" />
            <div className="news-content">
              <h2>{news.title}</h2>
              <span className="news-date">{news.date}</span>
            </div>
          </div>
        ))}
      </section>
      <section className="news-suggestions">
        <h3>مقترحات تطويرية للأخبار</h3>
        <ul>
          {suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default News;
