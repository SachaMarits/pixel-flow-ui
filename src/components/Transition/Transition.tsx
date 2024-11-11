import React, { useState, useEffect } from "react";

interface TransitionProps {
  in: boolean;
  duration: number;
  children: React.ReactElement;
}

export default function Transition({
  in: inProp,
  duration = 500,
  children,
}: TransitionProps) {
  const [state, setState] = useState(inProp ? "entering" : "exited");

  useEffect(() => {
    let timeoutId;

    if (inProp) {
      setState("entering");
      timeoutId = setTimeout(() => setState("entered"), 50);
    } else {
      setState("exiting");
      timeoutId = setTimeout(() => setState("exited"), duration);
    }

    return () => clearTimeout(timeoutId);
  }, [inProp, duration]);

  const getClass = () => {
    if (["entering", "entered"].includes(state))
      return `${state} enter transition`;
    if (["exiting", "exited"].includes(state))
      return `${state} exit transition`;
  };

  return state !== "exited"
    ? React.cloneElement(children, {
        className: `${children.props.className || ""} ${getClass()}`,
      })
    : null;
}
