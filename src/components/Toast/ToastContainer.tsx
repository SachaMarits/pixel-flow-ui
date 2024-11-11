import { useEffect, useState } from "react";
import { SuccessIcon, WarningIcon, ErrorIcon, PressIcon } from "../Icons";
import colors from "../../utils/colors";

interface Toast {
  id: number;
  title: string | null;
  text: string | null;
  icon: string | null;
  delay: number;
}

let toastId = 0;
export let addToastExternal:
  | ((
      title?: string | null,
      text?: string | null,
      icon?: string | null,
      delay?: number
    ) => void)
  | null = null;

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    addToastExternal = (
      title: string | null = null,
      text: string | null = null,
      icon: string | null = null,
      delay: number = 0
    ) => {
      const newToast = { id: toastId++, title, text, icon, delay };
      setToasts((prev) => [...prev, newToast]);
      if (delay > 0) setTimeout(() => removeToast(newToast.id), delay);
    };
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const renderIcon = (icon: string) => {
    if (icon === "success") return <SuccessIcon />;
    if (icon === "warning") return <WarningIcon />;
    if (icon === "error" || icon === "danger") return <ErrorIcon />;
    return null;
  };

  const returnBackground = (icon: string) => {
    if (icon === "success") return colors.success;
    if (icon === "warning") return colors.warning;
    if (icon === "error" || icon === "danger") return colors.danger;
    return colors.default;
  };

  return (
    <div id="pf-toast-container">
      {toasts.map(({ id, icon, title, text, delay }) => (
        <div key={id} className="pf-toast-modal">
          {icon && renderIcon(icon)}
          <div className="pf-toast-text">
            {title && <h3>{title}</h3>}
            {text && <p>{text}</p>}
          </div>
          <PressIcon
            className="pf-toast-close"
            onClick={() => setToasts(toasts.filter((t) => t.id !== id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </PressIcon>
          {delay > 0 && (
            <div
              className="pf-toast-progress"
              style={{
                backgroundColor: returnBackground(icon || "default"),
                animationDuration: `${delay}ms`,
                animationPlayState: "running",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
