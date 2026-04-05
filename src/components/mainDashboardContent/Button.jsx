// components/mainDashboardContent/Button.jsx


const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-2.5 rounded-lg bg-[var(--color-primary)] text-amber-50/75 text-xs   font-medium hover:bg-[var(--color-secondary)] transition flex items-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
