import "./alert.scss";
import { createRoot } from "react-dom/client";
import { Button } from "../Button";
import { ErrorIcon, SuccessIcon, WarningIcon } from "../Icons";

interface Button {
  color: "primary" | "success" | "warning" | "danger" | "default" | "gradient";
  text: string;
  value: unknown;
}

const Alert = (
  title: string | null = null,
  text: string | null = null,
  icon: string | null = null,
  buttons: Button[] = []
) => {
  const doesAlertDomExist = document.getElementById("pf-alert-dom");

  if (!doesAlertDomExist) {
    const divElement = document.createElement("div");
    divElement.id = "pf-alert-dom";
    document.body.insertBefore(divElement, document.body.lastChild);
  }

  const root = createRoot(
    document.getElementById("pf-alert-dom") ?? document.body
  );

  const renderIcon = () => {
    if (icon === "success") return <SuccessIcon />;
    if (icon === "warning") return <WarningIcon />;
    if (icon === "error") return <ErrorIcon />;
    return null;
  };

  const promise = new Promise((resolve) => {
    const hide = (value?: unknown | undefined) => {
      root.unmount();
      resolve(value);
    };

    const dom = (
      <div id="pf-alert-container">
        <div className="pf-alert-modal">
          {icon && renderIcon()}
          {title && <h2>{title}</h2>}
          {text && <p>{text}</p>}

          {buttons?.length > 0 ? (
            buttons.map(({ color, text, value }, i) => (
              <Button
                key={i}
                className={buttons.length !== i + 1 ? "pf-mr-3" : ""}
                text={text}
                color={color}
                onClick={() => hide(value)}
              />
            ))
          ) : (
            <Button text="Close" color="primary" onClick={() => hide()} />
          )}
        </div>
      </div>
    );

    root.render(dom);
  });

  return promise;
};

export default Alert;
