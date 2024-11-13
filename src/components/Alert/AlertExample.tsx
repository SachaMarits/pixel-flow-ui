import { Button } from "../Button";
import { Alert } from "./index";

interface Button {
  color: "primary" | "success" | "warning" | "danger" | "default" | "gradient";
  text: string;
  value: unknown;
}

interface AlertExampleProps {
  title: string;
  message: string;
  icon?: "success" | "warning" | "error" | null;
  buttons: Button[];
}

export default function AlertExample({
  title,
  message,
  icon = null,
  buttons = [],
}: AlertExampleProps) {
  return (
    <Button
      color="primary"
      text="Show alert"
      onClick={() => Alert(title, message, icon, buttons)}
    />
  );
}
