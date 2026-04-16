interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}

export default function Badge({
  children,
  className = "",
  variant = "solid",
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-label tracking-widest uppercase text-[10px] px-3 py-1";

  const variants = {
    solid: "bg-gold text-void",
    outline: "bg-transparent text-gold border border-border-glow",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
