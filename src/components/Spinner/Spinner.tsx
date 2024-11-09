import "./spinner.scss";

interface SpinnerProps {
  className?: string;
  color?: "primary" | "success" | "warning" | "danger" | "black" | "white";
  size?: "lg" | "md" | "sm" | "xs";
}

export default function Spinner({ className = "", color = "primary", size = "sm" }: SpinnerProps) {
  const sizeInPx = () => {
    if (size === "lg") return 64;
    if (size === "md") return 48;
    if (size === "sm") return 32;
    if (size === "xs") return 16;
    return 32;
  };

  return (
    <svg
      className={`pf-spinner ${className}`}
      style={{ height: sizeInPx(), width: sizeInPx() }}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={`pf-path pf-path-${color}`}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  );
}
