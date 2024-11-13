import "./hr.scss";

interface HrProps {
  className?: string;
}

export default function Hr({ className = "" }: HrProps) {
  return <hr className={`${className} pf-hr`} />;
}
