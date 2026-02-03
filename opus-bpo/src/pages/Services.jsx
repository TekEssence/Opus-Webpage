import { useEffect, useRef, useState } from "react"
import { services } from "../data/content.js"

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index))
          }
        })
      },
      {
        rootMargin: "-30% 0px -40% 0px",
        threshold: 0.35,
      }
    )

    cardRefs.current.forEach((node) => {
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="services-page-template services-alt-view">
      <section className="services-hero">
        <p className="services-hero-eyebrow">SERVICE LINES</p>
        <h1 className="services-hero-title">
          Built to Support Healthcare. Designed to Deliver Results.
        </h1>
        <p className="services-hero-copy">
          Delivering reliable medical billing and revenue cycle services built on accuracy, compliance, and measurable outcomes.
        </p>
      </section>

      <section className="services-timeline-section">
        <div className="services-timeline-column">
          <div className="services-timeline-list">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                className={`services-time-chip ${activeIndex === index ? "is-active" : ""}`}
                onClick={() => {
                  cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })
                }}
              >
                <span className="services-time-chip-step">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="services-time-chip-title">{service.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="services-card-list">
          {services.map((service, index) => (
            <article
              key={service.title}
              ref={(node) => (cardRefs.current[index] = node)}
              data-index={index}
              className={`services-card ${activeIndex === index ? "is-active" : ""}`}
            >
              <span className="services-card-step-mark">{String(index + 1).padStart(2, "0")}</span>
              <div className="services-card-media">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="services-card-glow" aria-hidden="true" />
              </div>
              <div className="services-card-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point, pointIndex) => (
                    <li key={`${service.title}-point-${pointIndex}`}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
