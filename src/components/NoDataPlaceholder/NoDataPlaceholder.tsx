import "./no-data-placeholder.scss";

interface NoDataPlaceholderProps {
  /**
   * Icon's name or dom
   */
  icon?: string | React.ReactNode | React.ReactElement;
  text: string;
  /**
   * Button to add a new entity
   */
  button?: React.ReactNode;
}

export default function NoDataPlaceholder({
  icon = "",
  text,
  button = null,
}: NoDataPlaceholderProps) {
  return (
    <div className="pf-no-data-placeholder">
      {icon &&
        (typeof icon === "string" ? (
          <i className={`${icon} pf-no-data-placeholder-icon`} />
        ) : (
          icon
        ))}
      {text && <p className="pf-no-data-placeholder-text">{text}</p>}
      {button}
    </div>
  );
}
