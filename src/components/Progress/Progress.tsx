import "./progress.scss";

interface ProgressProps {
  className?: string;
  value: number;
  min?: number;
  max?: number;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "default";
}

export default function Progress({ className = "", value, min = 0, max = 100, color = "primary" }: ProgressProps) {
  return (
    <div className={`${className || ""} pf-progress`}>
      <div className={`pf-progress-bar pf-bg-${color}`} style={{ width: `${((value - min) / (max - min)) * 100}%` }} />
    </div>
  );
}
