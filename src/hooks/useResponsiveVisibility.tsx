import { useState, useEffect, RefObject } from "react";

const useResponsiveVisibility = (
  parentRef: RefObject<HTMLElement>,
  thresholdWidth: number
): boolean => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!parentRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width } = entry.contentRect;

      setIsVisible(width > thresholdWidth);
    });

    observer.observe(parentRef.current);

    return () => observer.disconnect();
  }, [parentRef, thresholdWidth]);

  return isVisible;
};

export default useResponsiveVisibility;
