import BackButton from '../components/BackButton';

// صفحة شهادات الميلاد والوفاة
const CertificatesService = () => (
  <div dir="rtl" style={{background:'#f7f7f7',minHeight:'100vh'}}>
    <BackButton />
    <header style={{background:'linear-gradient(90deg,#003366 60%,#005599 100%)',color:'#fff',padding:'32px 0 24px',textAlign:'center',borderRadius:'0 0 32px 32px',marginBottom:32,boxShadow:'0 2px 12px #00336622'}}>
      <h1 style={{fontSize:30,margin:0}}>شهادات الميلاد والوفاة</h1>
      <p style={{fontSize:18,marginTop:12,color:'#e0e0e0'}}>استخراج شهادات الميلاد والوفاة إلكترونياً مع إمكانية التحقق من صحة الشهادة.</p>
    </header>
    <main style={{maxWidth:700,margin:'0 auto',background:'#fff',borderRadius:18,padding:32,boxShadow:'0 2px 12px #0001'}}>
      <h2 style={{color:'#003366'}}>خطوات الخدمة</h2>
      <ol style={{color:'#444',fontSize:16,lineHeight:2}}>
        <li>تسجيل الدخول أو إنشاء حساب جديد.</li>
        <li>اختيار نوع الشهادة (ميلاد/وفاة).</li>
        <li>تعبئة نموذج الطلب وإرفاق المستندات.</li>
        <li>دفع الرسوم إلكترونياً.</li>
        <li>استلام الشهادة إلكترونياً أو طباعتها.</li>
      </ol>
      <h3 style={{color:'#1976d2',marginTop:32}}>مقترحات تطويرية</h3>
      <ul style={{color:'#333',fontSize:15,lineHeight:2}}>
        <li>إمكانية التحقق من صحة الشهادة عبر QR Code.</li>
        <li>إشعارات فورية عند إصدار الشهادة.</li>
        <li>إتاحة طلب نسخ إضافية إلكترونياً.</li>
      </ul>
    </main>
  </div>
);
export default CertificatesService;
