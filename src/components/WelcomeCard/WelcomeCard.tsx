import "./welcome-card.scss";
import { Card } from "../Card";
import { Family, HomeSettings, RelaxingAtHome } from "./Icons";
import { Button } from "../Button";
import useResponsiveVisibility from "../../hooks/useResponsiveVisibility";
import { useRef } from "react";

interface WelcomeCardProps {
  title: string;
  text: string;
  icon: "family" | "relaxing-at-home" | "home-settings";
}

export default function WelcomeCard({ title, text, icon }: WelcomeCardProps) {
  const parentRef = useRef<HTMLDivElement>(null);
  const isVisible = useResponsiveVisibility(parentRef, 700);

  return (
    <Card ref={parentRef} className="pf-welcome-card">
      <div className="pf-welcome-card-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <Button color="secondary">Go now</Button>
      </div>
      {isVisible && icon === "family" && <Family />}
      {isVisible && icon === "relaxing-at-home" && <RelaxingAtHome />}
      {isVisible && icon === "home-settings" && <HomeSettings />}
    </Card>
  );
}
