import BackButton from '../components/BackButton';

// صفحة رخص القيادة
const DrivingLicenseService = () => (
  <div dir="rtl" style={{background:'#f7f7f7',minHeight:'100vh'}}>
    <BackButton />
    <header style={{background:'linear-gradient(90deg,#003366 60%,#005599 100%)',color:'#fff',padding:'32px 0 24px',textAlign:'center',borderRadius:'0 0 32px 32px',marginBottom:32,boxShadow:'0 2px 12px #00336622'}}>
      <h1 style={{fontSize:30,margin:0}}>إجراءات رخص القيادة</h1>
      <p style={{fontSize:18,marginTop:12,color:'#e0e0e0'}}>خدمات إصدار وتجديد رخص القيادة بأنواعها المختلفة مع إمكانية الحجز للاختبار إلكترونياً.</p>
    </header>
    <main style={{maxWidth:700,margin:'0 auto',background:'#fff',borderRadius:18,padding:32,boxShadow:'0 2px 12px #0001'}}>
      <h2 style={{color:'#003366'}}>خطوات الخدمة</h2>
      <ol style={{color:'#444',fontSize:16,lineHeight:2}}>
        <li>تسجيل الدخول أو إنشاء حساب جديد.</li>
        <li>اختيار نوع الرخصة المطلوبة.</li>
        <li>تعبئة نموذج الطلب وإرفاق المستندات.</li>
        <li>حجز موعد للاختبار (إن وجد).</li>
        <li>دفع الرسوم إلكترونياً واستلام الرخصة.</li>
      </ol>
      <h3 style={{color:'#1976d2',marginTop:32}}>مقترحات تطويرية</h3>
      <ul style={{color:'#333',fontSize:15,lineHeight:2}}>
        <li>إتاحة التدريب النظري عبر فيديوهات تفاعلية.</li>
        <li>إشعارات بمواعيد انتهاء الرخصة وتجديدها.</li>
        <li>تقييم جودة الخدمة من خلال استبيان إلكتروني.</li>
      </ul>
    </main>
  </div>
);
export default DrivingLicenseService;
