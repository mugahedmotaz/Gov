import reactLogo from '../assets/react.svg';
import BackButton from '../components/BackButton';

// عن الوزارة
const About = () => {
  return (
    <div dir="rtl" style={{ textAlign: 'right' }}>
      <BackButton />
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
        <img src={reactLogo} className="logo react" alt="React logo" style={{ width: 80, maxWidth: '100%' }} />
      </div>
      <h2>عن الوزارة</h2>
      <p>تعرف على رسالة ورؤية وزارة الداخلية السودانية.</p>
      <p>هذا الموقع تم تطويره باستخدام React وTypeScript وVite.</p>
    </div>
  );
};
export default About;
