// فوتر احترافي ثابت ومتجاوب لجميع صفحات الموقع
// الميزات:
// - معلومات تواصل وروابط سريعة
// - حقوق النشر
// - روابط سوشيال ميديا
// - متوافق مع RTL
// - تصميم عصري

const Footer = () => (
  <footer style={{
    background: 'linear-gradient(90deg,#003366 60%,#005599 100%)',
    color: '#fff',
    padding: '32px 0 16px 0',
    textAlign: 'center',
    marginTop: 48,
    borderRadius: '24px 24px 0 0',
    fontSize: 15,
    width: '100%',
  }}>
    <div style={{maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '0 16px'}}>
      <div style={{textAlign: 'right'}}>
        <div style={{fontWeight: 'bold', fontSize: 18}}>وزارة الداخلية السودانية</div>
        <div>الخرطوم - شارع الجامعة</div>
        <div>هاتف: 249-123456789+</div>
        <div>البريد: info@moi.gov.sd</div>
      </div>
      <div style={{textAlign: 'right'}}>
        <div style={{fontWeight: 'bold'}}>روابط سريعة</div>
        <a href="/services" style={{color:'#fff',textDecoration:'underline',margin:'0 8px'}}>الخدمات</a>
        <a href="/news" style={{color:'#fff',textDecoration:'underline',margin:'0 8px'}}>الأخبار</a>
        <a href="/contact" style={{color:'#fff',textDecoration:'underline',margin:'0 8px'}}>اتصل بنا</a>
      </div>
      <div style={{textAlign: 'right'}}>
        <div style={{fontWeight: 'bold'}}>تابعنا</div>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{color:'#fff',margin:'0 6px'}}>فيسبوك</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{color:'#fff',margin:'0 6px'}}>تويتر</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{color:'#fff',margin:'0 6px'}}>يوتيوب</a>
      </div>
    </div>
    <div style={{marginTop: 24, fontSize: 13, opacity: 0.8}}>
      جميع الحقوق محفوظة © وزارة الداخلية السودانية {new Date().getFullYear()}
    </div>
  </footer>
);
export default Footer;
