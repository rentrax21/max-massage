type FaqItem = { q: string; a: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list" data-reveal>
      {items.map((f, i) => (
        <details className="faq-item" key={i}>
          <summary>
            <span className="faq-q-idx">{String(i + 1).padStart(2, "0")}</span>
            {f.q}
            <span className="faq-plus" aria-hidden>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
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
