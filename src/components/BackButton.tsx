import { useNavigate } from 'react-router-dom';

const BackButton = ({ label = 'رجوع' }: { label?: string }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        background: '#005599',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        padding: '8px 15px',
        fontSize: 16,
        fontWeight: 'bold',
        cursor: 'pointer',
        margin: '16px 5px',
        boxShadow: '0 1px 6px #00336622',
        transition: 'background 0.15s',
        outline: 'none',
        // direction: 'rtl',
      }}
      aria-label={label}
    >
      ← {label}
    </button>
  );
};
export default BackButton;
