interface CardProps {
  className?: string;
  /**
   * Card's content, mostly used for <CardHeader /> and <CardFooter />
   */
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Card({
  className = "",
  children,
  onClick = () => {},
}: CardProps) {
  return (
    <div className={`pf-card ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
