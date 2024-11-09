import "./color-palette.scss";
import { useLayoutEffect, useState } from "react";

export default function ColorThemePalette() {
  const root = document.querySelector(":root") as HTMLElement;
  if (!root) return null;

  const getThemeColors = () => ({
    "--pixel-flow-primary": getComputedStyle(root).getPropertyValue(
      "--pixel-flow-primary"
    ),
    "--pixel-flow-secondary": getComputedStyle(root).getPropertyValue(
      "--pixel-flow-secondary"
    ),
    "--pixel-flow-success": getComputedStyle(root).getPropertyValue(
      "--pixel-flow-success"
    ),
    "--pixel-flow-warning": getComputedStyle(root).getPropertyValue(
      "--pixel-flow-warning"
    ),
    "--pixel-flow-danger": getComputedStyle(root).getPropertyValue(
      "--pixel-flow-danger"
    ),
    "--pixel-flow-default": getComputedStyle(root).getPropertyValue(
      "--pixel-flow-default"
    ),
  });

  const [themeColors, setThemeColors] = useState(getThemeColors());

  useLayoutEffect(() => setThemeColors(getThemeColors()), []);

  return (
    <div className="pf-color-palette">
      {Object.entries(themeColors).map(([key, color]) => (
        <input
          key={key}
          type="color"
          defaultValue={color}
          onBlur={(e) => root.style.setProperty(key, e.target.value)}
        />
      )) || null}
    </div>
  );
}
