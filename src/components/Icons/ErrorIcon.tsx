import colors from "../../utils/colors";

export default function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89 89"
      xmlSpace="preserve"
    >
      <style>
        {`@keyframes IahOXNQj_draw{to{stroke-dashoffset:0}}@keyframes IahOXNQj_fade{0%,92.3076923076923%{stroke-opacity:1}to{stroke-opacity:0}}.st1-error{fill:none;stroke:${colors.danger};stroke-width:4;stroke-linecap:round;stroke-miterlimit:10}`}
      </style>
      <path
        d="M3 44C3 30 10 2 44.5 2.5S86 32 86 44c0 11-6 42-42 42C11 86 3 58 3 44z"
        style={{
          strokeDasharray: "265 267",
          strokeDashoffset: 266,
          animation: "IahOXNQj_draw 666ms ease-in-out 0ms forwards",
          fill: "none",
          stroke: colors.danger,
          strokeWidth: 4,
          strokeMiterlimit: 10,
        }}
      />
      <path
        className="st1-error"
        d="m29.5 29.5 29 29"
        style={{
          strokeDasharray: "42 44",
          strokeDashoffset: 43,
          animation: "IahOXNQj_draw 666ms ease-in-out 166ms forwards",
        }}
      />
      <path
        className="st1-error"
        d="m58.5 29.5-29 29"
        style={{
          strokeDasharray: "42 44",
          strokeDashoffset: 43,
          animation: "IahOXNQj_draw 666ms ease-in-out 333ms forwards",
        }}
      />
    </svg>
  );
}
