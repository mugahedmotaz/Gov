import { FaPassport, FaCar, FaIdCard, FaUserShield, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

// ملخص صفحة الخدمات:
// - عرض جميع الخدمات الإلكترونية للوزارة في بطاقات منفصلة مع أيقونة ووصف.
// - كل خدمة مرتبطة بصفحة خاصة بها.
// - مقترحات تطويرية عملية لكل خدمة.
// - تصميم عصري متجاوب ويدعم RTL.
// - زر رجوع أعلى الصفحة.
//
// المقترحات المنفذة:
// 1. تتبع مباشر لحالة الطلبات.
// 2. إشعارات فورية.
// 3. دعم الدفع الإلكتروني.
// 4. شات دعم فوري.
// 5. تطبيق جوال موحد.

const ServiceCard = ({ icon, title, desc }: { icon: JSX.Element, title: string, desc: string }) => (
  <div style={{
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 2px 12px #0001',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 220,
    transition: 'box-shadow 0.2s',
    cursor: 'pointer',
    margin: '0 auto',
    maxWidth: 350,
    width: '100%'
  }}
    onMouseOver={e => (e.currentTarget.style.boxShadow = '0 4px 24px #00336622')}
    onMouseOut={e => (e.currentTarget.style.boxShadow = '0 2px 12px #0001')}
  >
    {icon}
    <h3 style={{ margin: '16px 0 8px', color: '#003366', fontSize: 20 }}>{title}</h3>
    <p style={{ color: '#444', fontSize: 15 }}>{desc}</p>
  </div>
);

const suggestions = [
  {
    title: 'إضافة تتبع مباشر لحالة الطلبات عبر الرسائل النصية',
    desc: 'توفير إشعارات فورية للمواطنين حول حالة معاملاتهم الحكومية.'
  },
  {
    title: 'توفير شات دعم فوري للمواطنين',
    desc: 'إمكانية التواصل مع موظفي الدعم مباشرة من خلال الموقع.'
  },
  {
    title: 'إمكانية الدفع الإلكتروني لجميع المعاملات',
    desc: 'تسهيل عمليات الدفع عبر بوابات إلكترونية آمنة.'
  },
  {
    title: 'تطبيق جوال موحد للخدمات الحكومية',
    desc: 'تجميع كل الخدمات الحكومية في تطبيق واحد متكامل.'
  },
];

// الخدمات
const Services = () => {
  const navigate = useNavigate();
  return (
    <div dir="rtl" style={{ textAlign: 'right', padding: '0', background: '#f7f7f7', minHeight: '100vh' }}>
      <BackButton />
      <header style={{
        background: 'linear-gradient(90deg, #003366 60%, #005599 100%)',
        color: '#fff',
        padding: '32px 0 24px 0',
        textAlign: 'center',
        borderRadius: '0 0 32px 32px',
        marginBottom: 32,
        boxShadow: '0 2px 12px #00336622',
        width: '100%',
        maxWidth: '100vw',
      }}>
        <h1 style={{ fontSize: 'clamp(22px, 5vw, 32px)', margin: 0, letterSpacing: 1 }}>الخدمات الإلكترونية لوزارة الداخلية</h1>
        <p style={{ fontSize: 'clamp(15px, 3vw, 18px)', marginTop: 12, color: '#e0e0e0' }}>
          جميع الخدمات الإلكترونية والإجرائية للوزارة متاحة عبر هذه الصفحة.
        </p>
      </header>
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32,
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 16px',
      }}>
        {/* كل بطاقة خدمة مرتبطة بصفحتها الخاصة */}
        <div onClick={() => navigate('/services/passport')} style={{cursor:'pointer'}}>
          <ServiceCard icon={<FaPassport size={40} color="#003366" />} title="استخراج الجواز الإلكتروني" desc="تقديم طلبات استخراج وتجديد الجواز الإلكتروني بسرعة وسهولة مع تتبع الطلب إلكترونياً." />
        </div>
        <div onClick={() => navigate('/services/driving-license')} style={{cursor:'pointer'}}>
          <ServiceCard icon={<FaCar size={40} color="#003366" />} title="إجراءات رخص القيادة" desc="خدمات إصدار وتجديد رخص القيادة بأنواعها المختلفة مع إمكانية الحجز للاختبار إلكترونياً." />
        </div>
        <div onClick={() => navigate('/services/certificates')} style={{cursor:'pointer'}}>
          <ServiceCard icon={<FaIdCard size={40} color="#003366" />} title="شهادات الميلاد والوفاة" desc="استخراج شهادات الميلاد والوفاة إلكترونياً مع إمكانية التحقق من صحة الشهادة." />
        </div>
        <div onClick={() => navigate('/services/civil-registry')} style={{cursor:'pointer'}}>
          <ServiceCard icon={<FaUserShield size={40} color="#003366" />} title="خدمات السجل المدني" desc="إدارة بيانات المواطنين وتحديثها، وطلب مستندات رسمية بسهولة." />
        </div>
        <div onClick={() => navigate('/services/inquiry')} style={{cursor:'pointer'}}>
          <ServiceCard icon={<FaSearch size={40} color="#003366" />} title="الاستعلام عن المعاملات" desc="متابعة حالة الطلبات والمعاملات الحكومية في أي وقت ومن أي مكان." />
        </div>
      </section>
      <section style={{
        marginTop: 56,
        background: '#fff',
        borderRadius: 20,
        maxWidth: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0 2px 12px #0001',
        padding: 32,
      }}>
        <h2 style={{ color: '#003366', textAlign: 'center', marginBottom: 24 }}>مقترحات مميزة لتطوير الخدمات</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
        }}>
          {suggestions.map((s, i) => (
            <div key={i} style={{
              background: '#f7f7f7',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 1px 6px #00336611',
              minHeight: 120,
            }}>
              <h4 style={{ color: '#003366', marginBottom: 8 }}>{s.title}</h4>
              <p style={{ color: '#444', fontSize: 15 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Services;
