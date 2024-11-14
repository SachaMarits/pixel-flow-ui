import React from "react";
import "./card.scss";

interface CardProps {
  className?: string;
  /**
   * Card's content, mostly used for <CardHeader /> and <CardFooter />
   */
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, style = {}, onClick = () => {} }, ref) => {
    return (
      <div
        className={`pf-card ${className}`}
        onClick={onClick}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default Card;
