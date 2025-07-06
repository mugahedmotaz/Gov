import BackButton from '../components/BackButton';
// import police from '../assets/moi/police.jpg';
// import civil from '../assets/moi/civil.jpg';
// import customs from '../assets/moi/customs.jpg';
// import wildlife from '../assets/moi/Wildlife.jpg';
// import prisons from '../assets/moi/Prisons.jpg';
// import ribat from '../assets/moi/ribat.jpg';
// import cor from '../assets/moi/cor.jpg';

// // دليل الوحدات
const UnitsGuide = () => {
  return (
    <div dir="rtl" style={{ textAlign: 'right' }}>
      <BackButton />
      <h2>دليل الوحدات</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 24,
        justifyContent: 'center',
        margin: '24px 0',
        alignItems: 'center',
      }}>
        <div style={{textAlign: 'center'}}>
          <img src={police} alt="قوات الشرطة" style={{width: '90px', maxWidth: '100%', borderRadius: 8, marginBottom: 8}} />
          <div>قوات الشرطة</div>
        </div>
        <div style={{textAlign: 'center'}}>
          <img src={civil} alt="قوات الدفاع المدني" style={{width: '90px', maxWidth: '100%', borderRadius: 8, marginBottom: 8}} />
          <div>قوات الدفاع المدني</div>
        </div>
        <div style={{textAlign: 'center'}}>
          <img src={customs} alt="قوات الجمارك" style={{width: '90px', maxWidth: '100%', borderRadius: 8, marginBottom: 8}} />
          <div>قوات الجمارك</div>
        </div>
        <div style={{textAlign: 'center'}}>
          <img src={wildlife} alt="قوات حماية الحياة البرية" style={{width: '90px', maxWidth: '100%', borderRadius: 8, marginBottom: 8}} />
          <div>قوات حماية الحياة البرية</div>
        </div>
        <div style={{textAlign: 'center'}}>
          <img src={prisons} alt="قوات السجون والإصلاح" style={{width: '90px', maxWidth: '100%', borderRadius: 8, marginBottom: 8}} />
          <div>قوات السجون والإصلاح</div>
        </div>
        <div style={{textAlign: 'center'}}>
          <img src={ribat} alt="جامعة الرباط الوطني" style={{width: '90px', maxWidth: '100%', borderRadius: 8, marginBottom: 8}} />
          <div>جامعة الرباط الوطني</div>
        </div>
        <div style={{textAlign: 'center'}}>
          <img src={cor} alt="معتمدية اللاجئين" style={{width: '90px', maxWidth: '100%', borderRadius: 8, marginBottom: 8}} />
          <div>معتمدية اللاجئين</div>
        </div>
      </div>
      <p>تعرف على وحدات الوزارة المختلفة.</p>
    </div>
  );
};
export default UnitsGuide;
