import BackButton from '../components/BackButton';

// المقالات
const Articles = () => {
  return (
    <div dir="rtl" style={{ textAlign: 'right' }}>
      <BackButton />
      <h2>المقالات</h2>
      <ul>
        <li>بيت الشورى: وزارة الداخلية جرد حساب</li>
        <li>الفريق شرطة خليل باشا: نموذج للنجاح</li>
        <li>الجهاز الشعبي لنهضة السودان</li>
      </ul>
      <p>مجموعة من المقالات والتقارير حول الوزارة.</p>
    </div>
  );
};
export default Articles;
