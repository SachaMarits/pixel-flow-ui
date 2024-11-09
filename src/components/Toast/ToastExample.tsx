import { ToastParams, useToast } from "./Toast";
import { Button } from "../Button";

export default function ToastExample({
  title = "",
  text = "",
  icon = undefined,
  delay = 0,
  corner = "bottomRight",
}: ToastParams & { corner?: string }) {
  const Toast = useToast(corner);
  return (
    <Button
      color="primary"
      text="Show toast"
      onClick={() =>
        Toast({
          title,
          text,
          icon,
          delay,
        })
      }
    />
  );
}
