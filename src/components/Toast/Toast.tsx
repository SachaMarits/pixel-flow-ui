import "./toast.scss";
import ReactDOM from "react-dom/client";
import ToastContainer, { addToastExternal } from "./ToastContainer";

export interface ToastParams {
  title?: string;
  text?: string;
  icon?: "success" | "warning" | "danger";
  delay?: number;
}

const createToastContainer = (corner: string) => {
  const id = "pf-toast-root";
  const element = document.getElementById(id);
  if (!element) {
    const toastRoot = document.createElement("div");

    if (corner.toLowerCase().includes("bottom")) toastRoot.style.bottom = "0";
    if (corner.toLowerCase().includes("top")) toastRoot.style.top = "0";
    if (corner.toLowerCase().includes("left")) toastRoot.style.left = "0";
    if (corner.toLowerCase().includes("right")) toastRoot.style.right = "0";

    toastRoot.id = id;
    document.body.appendChild(toastRoot);
    ReactDOM.createRoot(toastRoot).render(<ToastContainer />);
  }
};

export const useToast = (corner: string = "bottomRight") => {
  if (!addToastExternal) {
    createToastContainer(corner);
  }

  return (
    titleOrParams?: string | ToastParams,
    text?: string | null,
    icon?: string | null,
    delay?: number
  ) => {
    let title: string | null = null;

    if (typeof titleOrParams === "string") {
      title = titleOrParams;
    } else if (typeof titleOrParams === "object") {
      title = titleOrParams.title || null;
      text = titleOrParams.text || null;
      icon = titleOrParams.icon || null;
      delay = titleOrParams.delay || 0;
    }

    if (addToastExternal) {
      addToastExternal(title, text, icon, delay);
    }
  };
};
