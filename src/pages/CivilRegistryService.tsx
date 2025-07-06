import BackButton from '../components/BackButton';

// صفحة السجل المدني
const CivilRegistryService = () => (
  <div dir="rtl" style={{background:'#f7f7f7',minHeight:'100vh'}}>
    <BackButton />
    <header style={{background:'linear-gradient(90deg,#003366 60%,#005599 100%)',color:'#fff',padding:'32px 0 24px',textAlign:'center',borderRadius:'0 0 32px 32px',marginBottom:32,boxShadow:'0 2px 12px #00336622'}}>
      <h1 style={{fontSize:30,margin:0}}>خدمات السجل المدني</h1>
      <p style={{fontSize:18,marginTop:12,color:'#e0e0e0'}}>إدارة بيانات المواطنين وتحديثها، وطلب مستندات رسمية بسهولة.</p>
    </header>
    <main style={{maxWidth:700,margin:'0 auto',background:'#fff',borderRadius:18,padding:32,boxShadow:'0 2px 12px #0001'}}>
      <h2 style={{color:'#003366'}}>خدمات السجل المدني</h2>
      <ul style={{color:'#444',fontSize:16,lineHeight:2}}>
        <li>تحديث بيانات المواطن (العنوان، الحالة الاجتماعية...)</li>
        <li>طلب مستندات رسمية (بطاقة رقم وطني، قيد مدني...)</li>
        <li>الاستعلام عن بيانات السجل المدني.</li>
      </ul>
      <h3 style={{color:'#1976d2',marginTop:32}}>مقترحات تطويرية</h3>
      <ul style={{color:'#333',fontSize:15,lineHeight:2}}>
        <li>إتاحة تحديث البيانات عبر تطبيق جوال.</li>
        <li>إشعارات عند تحديث أو تغيير البيانات.</li>
        <li>إمكانية تتبع حالة الطلبات إلكترونياً.</li>
      </ul>
    </main>
  </div>
);
export default CivilRegistryService;
