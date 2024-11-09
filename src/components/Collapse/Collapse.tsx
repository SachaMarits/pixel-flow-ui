import "./collapse.scss";
import { useEffect, useState } from "react";

interface CollapseProps {
  className?: string;
  children: React.ReactNode;
  title?: string | React.ReactNode;
  show?: boolean;
  toggle?: () => void;
}

export default function Collapse({
  className,
  title = "",
  children,
  show = false,
  toggle,
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(show || false);
  useEffect(() => setIsOpen(show), [show]);

  return (
    <div
      className={`pf-collapse-wrapper ${isOpen ? "pf-active" : ""} ${
        className ? className : ""
      }`}
    >
      <div
        className="pf-collapse-title pf-pointer"
        onClick={() => {
          if (toggle) toggle();
          setIsOpen(!isOpen);
        }}
      >
        {title}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pf-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pf-up"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        )}
      </div>
      <div className="pf-collapse-content">{children}</div>
    </div>
  );
}
