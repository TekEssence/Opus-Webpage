const ServiceCard = ({ title, description, variant = "grid", onClick }) => {
  const baseClass = `card-metal reveal rounded-2xl p-6${
    onClick ? " cursor-pointer" : ""
  }`
  const interactiveProps = onClick
    ? {
        role: "button",
        tabIndex: 0,
        onClick,
        onKeyDown: (event) => {
          if (event.key === "Enter" || event.key === " ") onClick()
        },
      }
    : {}

  if (variant === "detail") {
    return (
      <div className={baseClass} {...interactiveProps}>
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-brand-slate">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {description}
            </p>
            {onClick && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  onClick()
                }}
                className="mt-4 rounded-full border border-brand-blue px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue transition hover:bg-blue-50"
              >
                View Details
              </button>
            )}
          </div>
          <div className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Core
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={baseClass} {...interactiveProps}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-brand-slate">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  )
}

export default ServiceCard
