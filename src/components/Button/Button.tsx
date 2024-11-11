import "./button.scss";
import { Spinner } from "../Spinner";
import { Ripple } from "../Ripple";

interface ButtonProps {
  className?: string;
  text?: string;
  color?: "primary" | "success" | "warning" | "danger" | "default" | "gradient";
  onClick?: () => void;
  submit?: boolean;
  animate?: boolean;
  isSubmitting?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  ripple?: boolean;
}

export default function Button({
  className = "",
  text = "",
  submit = false,
  animate = false,
  isSubmitting = false,
  disabled = false,
  onClick = () => {},
  children = null,
  color = "primary",
  ripple = true,
}: ButtonProps) {
  const styles = () => {
    let classNames = `${className} pf-btn${animate ? " pf-fadeIn" : ""} ${
      isSubmitting ? " pf-btn-disabled" : ""
    }`;
    classNames += ` pf-btn-${color}`;
    return classNames;
  };

  return (
    <button
      type={submit ? "submit" : "button"}
      className={styles()}
      onClick={() => onClick()}
      disabled={isSubmitting || disabled}
    >
      {isSubmitting ? (
        <Spinner color="white" size="xs" />
      ) : (
        children || <>{text}</>
      )}
      {ripple && <Ripple />}
    </button>
  );
}
