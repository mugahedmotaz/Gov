import BackButton from '../components/BackButton';

// اتصل بنا
const Contact = () => {
  return (
    <div dir="rtl" style={{ textAlign: 'right' }}>
      <BackButton />
      <h2>اتصل بنا</h2>
      <p>للتواصل مع وزارة الداخلية السودانية:</p>
      <ul>
        <li>البريد الإلكتروني: info@moi.gov.sd</li>
        <li>الموقع: بورتسودان - رئاسة وزارة الداخلية</li>
      </ul>
      <p>تابعنا على وسائل التواصل الاجتماعي.</p>
    </div>
  );
};
export default Contact;
