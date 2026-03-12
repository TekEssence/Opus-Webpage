const SectionHeader = ({
  label,
  title,
  description,
  align = "left",
  labelClassName = "",
}) => (
  <div
    className={`flex flex-col gap-4 ${align === "center" ? "text-center" : ""}`}
  >
    <p className={`text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue ${labelClassName}`.trim()}>
      {label}
    </p>
    <h2 className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="text-base leading-relaxed text-slate-600">{description}</p>
    )}
  </div>
)

export default SectionHeader
