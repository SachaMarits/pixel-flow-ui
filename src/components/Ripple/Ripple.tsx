import "./ripple.scss";
import { useState, useLayoutEffect } from "react";

interface RippleProps {
  color?: string;
  duration?: number;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
}

const useDebouncedRippleCleanUp = (rippleCount: number, duration: number, cleanUpFunction: () => void) => {
  useLayoutEffect(() => {
    let bounce: ReturnType<typeof setTimeout> | null = null;

    if (rippleCount > 0) {
      if (bounce !== null) {
        clearTimeout(bounce);
      }

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce as NodeJS.Timeout); // Cast ici si l'environnement est Node.js
      }, duration * 4);
    }

    return () => {
      if (bounce !== null) {
        clearTimeout(bounce);
      }
    };
  }, [rippleCount, duration, cleanUpFunction]);
};

export default function Ripple({ color = "#FFFFFF99", duration = 700 }: RippleProps) {
  const [rippleArray, setRippleArray] = useState<Ripple[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div className="pf-ripple" onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
                animationDuration: `${duration}ms`,
                backgroundColor: color
              }}
            />
          );
        })}
    </div>
  );
}
