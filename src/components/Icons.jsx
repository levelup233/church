const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 };

export const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 7h18M3 12h18M3 17h18" {...stroke} strokeWidth="1.6" />
  </svg>
);

export const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 5l14 14M19 5L5 19" {...stroke} strokeWidth="1.6" />
  </svg>
);

export const PlayIcon = () => (
  <svg width="11" height="13" viewBox="0 0 12 14" aria-hidden="true">
    <path d="M1 1l10 6-10 6z" {...stroke} strokeLinejoin="round" />
  </svg>
);

export const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" {...stroke} />
    <path d="M12 7v5l3 2" {...stroke} />
  </svg>
);

export const VideoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" {...stroke} />
    <path d="M10 9l5 3-5 3z" {...stroke} strokeLinejoin="round" />
  </svg>
);

export const PinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s-7-6.5-7-11.5a7 7 0 0114 0C19 14.5 12 21 12 21z" {...stroke} />
    <circle cx="12" cy="9.5" r="2.5" {...stroke} />
  </svg>
);

export const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z"
      {...stroke}
      strokeLinejoin="round"
    />
  </svg>
);
