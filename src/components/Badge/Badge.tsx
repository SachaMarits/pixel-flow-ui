import "./badge.scss";

interface BadgeProps {
  className?: string;
  /**
   * Badge's content, mostly used for text
   */
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default";
}

export default function Badge({
  className = "",
  children,
  color = "primary",
  ...props
}: BadgeProps) {
  return (
    <div className={`pf-badge pf-badge-${color} ${className || ""}`} {...props}>
      {children}
    </div>
  );
}
