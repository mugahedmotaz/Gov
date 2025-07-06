import BackButton from '../components/BackButton';

// صفحة الاستعلام عن المعاملات
const InquiryService = () => (
  <div dir="rtl" style={{background:'#f7f7f7',minHeight:'100vh'}}>
    <BackButton />
    <header style={{background:'linear-gradient(90deg,#003366 60%,#005599 100%)',color:'#fff',padding:'32px 0 24px',textAlign:'center',borderRadius:'0 0 32px 32px',marginBottom:32,boxShadow:'0 2px 12px #00336622'}}>
      <h1 style={{fontSize:30,margin:0}}>الاستعلام عن المعاملات</h1>
      <p style={{fontSize:18,marginTop:12,color:'#e0e0e0'}}>متابعة حالة الطلبات والمعاملات الحكومية في أي وقت ومن أي مكان.</p>
    </header>
    <main style={{maxWidth:700,margin:'0 auto',background:'#fff',borderRadius:18,padding:32,boxShadow:'0 2px 12px #0001'}}>
      <h2 style={{color:'#003366'}}>كيفية الاستعلام</h2>
      <ol style={{color:'#444',fontSize:16,lineHeight:2}}>
        <li>الدخول إلى حسابك في الموقع.</li>
        <li>إدخال رقم الطلب أو رقم الهوية.</li>
        <li>عرض حالة الطلب أو المعاملة مباشرة.</li>
      </ol>
      <h3 style={{color:'#1976d2',marginTop:32}}>مقترحات تطويرية</h3>
      <ul style={{color:'#333',fontSize:15,lineHeight:2}}>
        <li>إشعارات فورية عند تحديث حالة الطلب.</li>
        <li>إمكانية طباعة تقرير حالة المعاملة.</li>
        <li>دعم الاستعلام عبر تطبيق الجوال.</li>
      </ul>
    </main>
  </div>
);
export default InquiryService;
