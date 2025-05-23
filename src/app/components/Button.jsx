const Button = ({ variant = "primary", children, ...props }) => {
  const base =
    "text-xs-fluid font-semibold px-4 py-2 border cursor-pointer transition-colors duration-200";

  const variants = {
    primary:
      "bg-[var(--color-kurator-primary)] text-[var(--color-kurator-bg)] border-[var(--color-kurator-primary)] hover:bg-[var(--color-kurator-bg)] hover:text-[var(--color-kurator-primary)] hover:border-[var(--color-kurator-primary)]",
    secondary:
      "bg-transparent text-[var(--color-kurator-primary)] border-[var(--color-kurator-primary)] hover:bg-[var(--color-kurator-primary)] hover:text-[var(--color-kurator-bg)]",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
