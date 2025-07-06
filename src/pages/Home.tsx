import viteLogo from '/vite.svg';
import BackButton from '../components/BackButton';

// الصفحة الرئيسية
const Home = () => {
  return (
    <div dir="rtl" style={{ textAlign: 'right', minHeight: '100vh', background: '#f7f7f7' }}>
      <BackButton />
      <header style={{
        background: 'linear-gradient(90deg, #003366 60%, #005599 100%)',
        color: '#fff',
        padding: '40px 0 32px 0',
        textAlign: 'center',
        borderRadius: '0 0 32px 32px',
        marginBottom: 32,
        boxShadow: '0 2px 12px #00336622',
        width: '100%',
        maxWidth: '100vw',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginBottom: 12 }}>
          <img src={viteLogo} className="logo" alt="Vite logo" style={{ width: 70, maxWidth: '100%' }} />
          <h1 style={{ fontSize: 'clamp(22px, 5vw, 34px)', margin: 0, letterSpacing: 1, fontWeight: 700 }}>بوابة وزارة الداخلية السودانية</h1>
        </div>
        <p style={{ fontSize: 'clamp(15px, 3vw, 19px)', margin: 0, color: '#e0e0e0' }}>
          منصة إلكترونية متكاملة للخدمات والمعلومات الحكومية.
        </p>
      </header>
      <main style={{maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 24}}>
        <h2>الرئيسية</h2>
        <p>مرحباً بكم في بوابة وزارة الداخلية السودانية.</p>
        <p className="read-the-docs">اضغط على الروابط أعلاه للتنقل بين أقسام الموقع.</p>
      </main>
    </div>
  );
};
export default Home;
