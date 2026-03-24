interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 font-bold active:scale-95";

  const hoverStyles = disabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer hover:-translate-y-1";

  const variants = {
    primary:
      "ring-2 ring-primary-600 bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/50",
    secondary:
      "ring-2 ring-accent-400 text-accent-400 hover:bg-accent-400 hover:text-white shadow-lg shadow-accent-500/50",
    dark: "ring-2 ring-dark/95 bg-dark/95 text-white hover:bg-dark/90 shadow-lg shadow-dark/50",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-4 2xl:px-6 py-2 2xl:py-2.5 2xl:text-lg",
    lg: "px-8 py-3.5 text-xl",
  };

  const combinedClasses = `${baseStyles} ${hoverStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
