/** Sygnet: litera M poprowadzona jak trasa dojazdu, zakończona złotym punktem. */
export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg
      className="logo-mark"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <rect x="1" y="1" width="46" height="46" rx="13" stroke="#C8A96A" strokeOpacity="0.55" strokeWidth="1.5" />
      <path
        d="M12 33V17.5c0-1.2 1.5-1.7 2.3-.8l8.2 9.6c.8.9 2.2.9 3 0l8.2-9.6c.8-.9 2.3-.4 2.3.8V28"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="33" r="3" fill="#C8A96A" />
    </svg>
  );
}
