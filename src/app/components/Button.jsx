
const Button = ({ variant = "primary", children, ...props }) => {
  const base = "text-sm font-semibold px-4 py-2 border cursor-pointer";

  const variants = {
    primary: "bg-kurator-primary text-kurator-bg border-kurator-primary hover:bg-kurator-bg hover:text-kurator-primary",
    secondary: "bg-transparent text-kurator-primary border-kurator-primary hover:bg-kurator-primary hover:text-kurator-bg",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
