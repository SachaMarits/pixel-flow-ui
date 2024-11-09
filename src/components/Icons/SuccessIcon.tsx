import colors from "../../utils/colors";

export default function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89 89"
      xmlSpace="preserve"
    >
      <style>
        {
          "@keyframes zUJRJndd_draw{to{stroke-dashoffset:0}}@keyframes zUJRJndd_fade{0%,92.3076923076923%{stroke-opacity:1}to{stroke-opacity:0}}"
        }
      </style>
      <path
        d="M3 44C3 30 10 2 44.5 2.5S86 32 86 44c0 11-6 42-42 42C11 86 3 58 3 44z"
        style={{
          strokeDasharray: "265 267",
          strokeDashoffset: 266,
          animation: "zUJRJndd_draw 666ms ease-in-out 0ms forwards",
          fill: "none",
          stroke: colors.success,
          strokeWidth: 4,
          strokeMiterlimit: 10,
        }}
      />
      <path
        d="m22 45 15 15 31-31"
        style={{
          strokeDasharray: "66 68",
          strokeDashoffset: 67,
          animation: "zUJRJndd_draw 666ms ease-in-out 333ms forwards",
          fill: "none",
          stroke: colors.success,
          strokeWidth: 5,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
    </svg>
  );
}
