interface FilePreviewIconProps {
  type: string;
}

export default function FilePreviewIcon({ type }: FilePreviewIconProps) {
  const categorizeFileType = (mimeType: string) => {
    if (mimeType.startsWith("image/")) return "images";

    if (mimeType.startsWith("video/")) return "videos";

    if (mimeType.startsWith("audio/") || mimeType === "application/ogg")
      return "audio";

    if (
      mimeType.startsWith("application/vnd.ms-excel") ||
      mimeType ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )
      return "spreadsheets";

    if (
      mimeType.startsWith("application/pdf") ||
      mimeType.startsWith("application/msword")
    )
      return "documents";

    if (
      mimeType.startsWith("application/zip") ||
      mimeType.startsWith("application/x-")
    )
      return "archives";

    if (
      mimeType === "application/javascript" ||
      mimeType === "text/css" ||
      mimeType === "text/html"
    )
      return "code";

    if (mimeType.startsWith("text/")) return "texts";

    if (mimeType === "application/json") return "json";

    return "other";
  };

  const color = "var(--pixel-flow-primary)";
  const size = "33";

  const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const category = categorizeFileType(type);

  if (category === "images")
    return (
      <svg {...svgProps}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <circle cx="10" cy="12" r="2" />
        <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />
      </svg>
    );

  if (category === "videos")
    return (
      <svg {...svgProps}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m10 11 5 3-5 3v-6Z" />
      </svg>
    );

  if (category === "archives")
    return (
      <svg {...svgProps}>
        <path d="M10 12v-1" />
        <path d="M10 18v-2" />
        <path d="M10 7V6" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" />
        <circle cx="10" cy="20" r="2" />
      </svg>
    );

  if (category === "spreadsheets")
    return (
      <svg {...svgProps}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M8 13h2" />
        <path d="M14 13h2" />
        <path d="M8 17h2" />
        <path d="M14 17h2" />
      </svg>
    );

  if (["texts", "documents"].includes(category))
    return (
      <svg {...svgProps}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    );

  if (category === "audio")
    return (
      <svg {...svgProps}>
        <path d="M11 11a5 5 0 0 1 0 6" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23" />
        <path d="M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z" />
      </svg>
    );

  if (category === "code")
    return (
      <svg {...svgProps}>
        <path d="M10 12.5 8 15l2 2.5" />
        <path d="m14 12.5 2 2.5-2 2.5" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      </svg>
    );

  if (category === "json")
    return (
      <svg {...svgProps}>
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
        <path d="M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
      </svg>
    );

  return (
    <svg {...svgProps}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
