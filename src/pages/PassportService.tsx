import BackButton from '../components/BackButton';

// صفحة استخراج الجواز الإلكتروني
const PassportService = () => (
  <div dir="rtl" style={{background:'#f7f7f7',minHeight:'100vh'}}>
    <BackButton />
    <header style={{background:'linear-gradient(90deg,#003366 60%,#005599 100%)',color:'#fff',padding:'32px 0 24px',textAlign:'center',borderRadius:'0 0 32px 32px',marginBottom:32,boxShadow:'0 2px 12px #00336622'}}>
      <h1 style={{fontSize:30,margin:0}}>استخراج الجواز الإلكتروني</h1>
      <p style={{fontSize:18,marginTop:12,color:'#e0e0e0'}}>تقديم طلبات استخراج وتجديد الجواز الإلكتروني بسرعة وسهولة مع تتبع الطلب إلكترونياً.</p>
    </header>
    <main style={{maxWidth:700,margin:'0 auto',background:'#fff',borderRadius:18,padding:32,boxShadow:'0 2px 12px #0001'}}>
      <h2 style={{color:'#003366'}}>خطوات الخدمة</h2>
      <ol style={{color:'#444',fontSize:16,lineHeight:2}}>
        <li>تسجيل الدخول أو إنشاء حساب جديد.</li>
        <li>تعبئة نموذج طلب الجواز الإلكتروني.</li>
        <li>إرفاق المستندات المطلوبة (صورة شخصية، بطاقة رقم وطني...)</li>
        <li>دفع الرسوم إلكترونياً.</li>
        <li>تتبع حالة الطلب حتى استلام الجواز.</li>
      </ol>
      <h3 style={{color:'#1976d2',marginTop:32}}>مقترحات تطويرية</h3>
      <ul style={{color:'#333',fontSize:15,lineHeight:2}}>
        <li>إتاحة رفع المستندات عبر الجوال مباشرة.</li>
        <li>إشعارات فورية بحالة الطلب عبر الرسائل النصية.</li>
        <li>إمكانية حجز موعد استلام الجواز إلكترونياً.</li>
      </ul>
    </main>
  </div>
);
export default PassportService;
