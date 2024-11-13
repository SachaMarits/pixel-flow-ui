import "./empty-line-placeholder.scss";

interface EmptyLinePlaceholderProps {
  style?: React.CSSProperties;
  className?: string;
  onClick: () => void;
  text: string | React.ReactNode;
  action?: string;
  success?: boolean;
}

export default function EmptyLinePlaceholder({
  style = {},
  onClick,
  text,
  action = "",
  success = false,
  className = "",
}: EmptyLinePlaceholderProps) {
  return (
    <div
      className={`pf-empty-line-placeholder${
        success ? "-success" : ""
      } pointer ${className ? className : ""}`}
      style={style}
      onClick={onClick}
    >
      {text} {action === "add" && <i className="mdi mdi-plus" />}
    </div>
  );
}
