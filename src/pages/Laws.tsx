import BackButton from '../components/BackButton';

// القوانين
const Laws = () => {
  return (
    <div dir="rtl" style={{textAlign: 'right'}}>
      <BackButton />
      <h2>لوائح وقوانين</h2>
      <ul>
        <li>قانون الشرطة السودانية</li>
        <li>قانون الجمارك</li>
        <li>قانون الدفاع المدني</li>
        <li>قانون حماية الحياة البرية</li>
      </ul>
      <p>جميع اللوائح والقوانين المنظمة لعمل الوزارة متاحة هنا.</p>
    </div>
  );
};
export default Laws;
