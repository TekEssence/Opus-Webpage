const socialLinks = [
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com" },
  { label: "YouTube", icon: "youtube", href: "https://www.youtube.com" },
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com" },
]

const socialIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 9h3v11H6zM7.5 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11 9h3v1.45h.04a3.3 3.3 0 0 1 3-1.65c3.22 0 3.83 2.11 3.83 4.86V20h-3v-4.3c0-1.03 0-2.35-1.43-2.35s-1.65 1.12-1.65 2.28V20h-3z"
        fill="currentColor"
      />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M23 7.5s-.24-1.7-.98-2.44C20.7 4.1 19.6 4 18.9 4H5.1c-.7 0-1.8.1-3 .98C1.2 6 1 7.5 1 7.5S1 9 1.1 10.5v3c-.1 1.5-.1 3-.1 3s.24 1.7.98 2.44C3.3 21.9 4.4 22 5.1 22h13.8c.7 0 1.8-.1 3-.98.74-.74.98-2.44.98-2.44s.1-1.5.1-3v-3c0-1.5 0-3-.1-3z"
        fill="currentColor"
      />
      <polygon points="10 13 16 9 10 5 10 13" fill="#fff" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.5 9H16V6.5h-2.5c-2.19 0-3 1.31-3 3.06V11H8v2.83h2.5V20h3.01v-6.17H16l.5-2.83h-2.5V9.73C14 9.31 14.31 9 14.5 9z"
        fill="currentColor"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8.2a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2z"
        fill="currentColor"
      />
      <circle cx="16.2" cy="7.8" r="1" fill="currentColor" />
      <path
        d="M19 4H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"
        fill="currentColor"
      />
    </svg>
  ),
}

export { socialLinks, socialIcons }
