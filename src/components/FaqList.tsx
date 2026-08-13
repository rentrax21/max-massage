type FaqItem = { q: string; a: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <details className="faq-item" key={i} data-reveal style={{ "--reveal-delay": `${i * 0.06}s` } as React.CSSProperties}>
          <summary>
            {f.q}
            <span className="faq-plus" aria-hidden>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 4v16M4 12h16" />
              </svg>
            </span>
          </summary>
          <p className="faq-a">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
