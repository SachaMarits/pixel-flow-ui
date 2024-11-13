import "./press-icon.scss";

interface IconProps {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}

export default function PressIcon({
  className = "",
  children,
  onClick,
}: IconProps) {
  return (
    <div className={`${className} pf-press-icon`} onClick={onClick}>
      {children}
    </div>
  );
}
