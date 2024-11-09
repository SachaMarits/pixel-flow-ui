import colors from "../../utils/colors";

export default function WarningIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89 89"
      xmlSpace="preserve"
    >
      <style>
        {`@keyframes BjuqfILe_draw{to{stroke-dashoffset:0}}@keyframes BjuqfILe_fade{0%,92.3076923076923%{stroke-opacity:1}to{stroke-opacity:0}}.st1{fill:none;stroke:${colors.warning};stroke-width:5;stroke-linecap:round;stroke-miterlimit:10}`}
      </style>
      <path
        d="M3 44C3 30 10 2 44.5 2.5S86 32 86 44c0 11-6 42-42 42C11 86 3 58 3 44z"
        style={{
          strokeDasharray: "265 267",
          strokeDashoffset: 266,
          animation: "BjuqfILe_draw 666ms ease-in-out 0ms forwards",
          fill: "none",
          stroke: colors.warning,
          strokeWidth: 4,
          strokeMiterlimit: 10,
        }}
      />
      <path
        className="st1"
        d="M45 26v25"
        style={{
          strokeDasharray: "25 27",
          strokeDashoffset: 26,
          animation: "BjuqfILe_draw 666ms ease-in-out 166ms forwards",
        }}
      />
      <path
        className="st1"
        d="M45 62v.1"
        style={{
          strokeDasharray: "1 3",
          strokeDashoffset: 2,
          animation: "BjuqfILe_draw 666ms ease-in-out 333ms forwards",
        }}
      />
    </svg>
  );
}
