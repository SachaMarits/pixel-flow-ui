import "./sidebar.scss";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { Transition } from "../Transition";
import { PressIcon } from "../Icons";

interface SidebarProps {
  onClose: () => void;
  show: boolean;
  children: React.ReactNode;
  className?: string;
  title?: string;
  closeWithEscape?: boolean;
  direction?: "left" | "right";
}

export default function Sidebar({
  onClose,
  show,
  children,
  className = "",
  title = "",
  closeWithEscape = true,
  direction = "right",
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(show);
  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
  };

  useEffect(() => setIsOpen(show), [show]);

  useEffect(() => {
    if (closeWithEscape) {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);
      return () =>
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    }
  }, []);

  const close = () => {
    setIsOpen(false);
    onClose();
  };

  return ReactDOM.createPortal(
    <Transition in={isOpen} duration={300}>
      <div
        className={`pf-sidebar ${
          direction === "left" ? "pf-left" : "pf-right"
        } ${className || ""}`}
      >
        <div className="pf-sidebar-header">
          <PressIcon onClick={() => close()}>
            <svg
              className="pf-sidebar-close pf-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </PressIcon>

          <h3>{title}</h3>
        </div>
        {children}
      </div>
    </Transition>,
    document.getElementById("root") ?? document.body
  );
}
