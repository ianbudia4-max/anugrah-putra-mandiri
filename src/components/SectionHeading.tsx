interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "text-center mx-auto" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="section-eyebrow text-xs font-bold uppercase text-blue">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-[2.25rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink/70 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
