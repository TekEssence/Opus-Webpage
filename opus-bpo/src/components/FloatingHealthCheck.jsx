import { useEffect, useRef, useState } from "react"
import { HeartPulse } from "lucide-react"

const PARTICLE_COUNT = 20
const COLORS = [
  "#e74c3c",
  "#f39c12",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#1abc9c",
  "#e67e22",
  "#e84393",
  "#00cec9",
  "#fdcb6e",
  "#6c5ce7",
  "#ff6b6b",
  "#feca57",
  "#48dbfb",
  "#ff9ff3",
  "#54a0ff",
  "#5f27cd",
  "#01a3a4",
  "#f368e0",
  "#ff6348",
]

const FloatingHealthCheck = ({ onActivate }) => {
  const [particles, setParticles] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const popupTimerRef = useRef(null)

  const handleClick = () => {
    const newParticles = Array.from({ length: PARTICLE_COUNT }, (_, index) => {
      const id = Date.now() + index
      const angle = (360 / PARTICLE_COUNT) * index + (Math.random() * 20 - 10)
      return {
        id,
        color: COLORS[index % COLORS.length],
        angle,
        distance: 80 + Math.random() * 100,
        size: 6 + Math.random() * 8,
        delay: Math.random() * 150,
      }
    })

    setParticles(newParticles)
    onActivate?.()
    setShowPopup(true)

    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current)
    }

    popupTimerRef.current = window.setTimeout(() => {
      setShowPopup(false)
      popupTimerRef.current = null
    }, 3200)

    setTimeout(() => setParticles([]), 1200)
  }

  useEffect(() => {
    return () => {
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current)
      }
    }
  }, [])

  return (
    <>
      {particles.length > 0 && (
        <div className="floating-particles">
          {particles.map((particle) => {
            const rad = (particle.angle * Math.PI) / 180
            return (
              <span
                key={particle.id}
                style={{
                  position: "absolute",
                  width: particle.size,
                  height: particle.size,
                  borderRadius: "50%",
                  background: particle.color,
                  left: "50%",
                  top: "50%",
                  marginLeft: -particle.size / 2,
                  marginTop: -particle.size / 2,
                  animation: `particleBurst 0.8s ease-out ${particle.delay}ms forwards`,
                  "--tx": `${Math.cos(rad) * particle.distance}px`,
                  "--ty": `${Math.sin(rad) * particle.distance}px`,
                }}
              />
            )
          })}
        </div>
      )}

      {showPopup && (
        <div className="floating-practice-popup" role="status" aria-live="polite">
          <div className="floating-practice-popup-icon" aria-hidden="true">
            <HeartPulse size={18} />
          </div>
          <div>
            <p className="floating-practice-popup-title">Try a free health check</p>
            <p className="floating-practice-popup-subtitle">
              Let OPUS BPO review your revenue cycle in minutes.
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        className="floating-practice-trigger"
        aria-label="Open Practice Health Check menu"
        onClick={handleClick}
      >
        <span className="floating-practice-icon" aria-hidden="true">
          <HeartPulse size={28} />
        </span>
      </button>
    </>
  )
}

export default FloatingHealthCheck
