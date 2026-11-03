export function FacebookIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14 9.5h2V6.5h-2c-1.93 0-3.5 1.57-3.5 3.5v2H8.5v3H10.5V20h3v-5h2l.5-3h-2.5v-2c0-.28.22-.5.5-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.6 15 12l-4.5 2.4V9.6Z" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7.6" cy="8" r="1.1" fill="currentColor" />
      <path d="M7.6 10.8v6.2M12 17v-3.6c0-1.3.9-2.3 2.1-2.3 1.2 0 1.9.9 1.9 2.3V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
