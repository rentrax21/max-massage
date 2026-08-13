type IconProps = {
  size?: number;
  className?: string;
};

function base(size?: number) {
  return {
    width: size ?? 20,
    height: size ?? 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
}

export function HomeIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9v11h13V9" />
      <path d="M9.5 20v-6h5v6" />
    </svg>
  );
}

export function ClockIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CarIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 16v-3.5L6 7.8A1.6 1.6 0 0 1 7.5 6.8h9A1.6 1.6 0 0 1 18 7.8l2 4.7V16" />
      <path d="M4 12.5h16" />
      <circle cx="7.6" cy="16" r="1.7" />
      <circle cx="16.4" cy="16" r="1.7" />
    </svg>
  );
}

export function ShieldIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3.2 5 5.8v5.4c0 4.4 3 7.7 7 9.6 4-1.9 7-5.2 7-9.6V5.8Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  );
}

export function CheckIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size ?? 16)} className={className}>
      <path d="m5 12.5 4.2 4.3L19 7" />
    </svg>
  );
}

export function PhoneIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6.8 3.8 8.9 3l2 4.2-1.7 1.6a12.8 12.8 0 0 0 6 6l1.6-1.7 4.2 2-.8 2.1c-.4 1-1.4 1.7-2.5 1.5C10.6 17.9 6.1 13.4 4.3 6.3c-.2-1.1.5-2.1 1.5-2.5Z" />
    </svg>
  );
}

export function WhatsAppIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size ?? 20}
      height={size ?? 20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.38-1.99-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function ArrowRightIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size ?? 16)} className={className}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size ?? 14)} className={className}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function StarIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size ?? 15}
      height={size ?? 15}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95L12 2.6z" />
    </svg>
  );
}

export function MailIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 7.5 8 6 8-6" />
    </svg>
  );
}

export function PinIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 21.5s-7-6.4-7-11.4a7 7 0 0 1 14 0c0 5-7 11.4-7 11.4Z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </svg>
  );
}

export function CalendarIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17" />
      <path d="M8 3v4M16 3v4" />
    </svg>
  );
}

export function TableIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="8" width="19" height="3.4" rx="1.7" />
      <path d="M5.5 11.5 4 19M18.5 11.5 20 19M8 11.5l-1 5M16 11.5l1 5" />
    </svg>
  );
}

export function SparkIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3.5c.7 4.3 2.2 5.8 6.5 6.5-4.3.7-5.8 2.2-6.5 6.5-.7-4.3-2.2-5.8-6.5-6.5 4.3-.7 5.8-2.2 6.5-6.5Z" />
      <path d="M18.8 15.2c.35 2 1 2.65 3 3-2 .35-2.65 1-3 3-.35-2-1-2.65-3-3 2-.35 2.65-1 3-3Z" />
    </svg>
  );
}

export function MoonIcon({ size, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20 13.2A8.1 8.1 0 0 1 10.8 4a8.1 8.1 0 1 0 9.2 9.2Z" />
    </svg>
  );
}
