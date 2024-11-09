import "./color-palette.scss";
import { useEffect, useState } from "react";

interface ColorPaletteProp {
  value: string[];
  defaultValue?: string[];
  onChange: (v: string[]) => void;
}

export default function ColorPalette({
  value,
  defaultValue,
  onChange,
}: ColorPaletteProp) {
  const [colors, setColors] = useState(defaultValue || value);

  const handleChange = (color: string, index: number) =>
    onChange(colors.map((c, i) => (index === i ? color : c)));

  useEffect(() => value && setColors(value), [value]);

  return (
    <div className="pf-color-palette">
      {colors?.map((color, index) => (
        <input
          key={index}
          type="color"
          defaultValue={color}
          onBlur={(e) => handleChange(e.target.value, index)}
        />
      )) || null}
    </div>
  );
}
