import { credentials, hasCredentials, yearsOfPractice } from "@/lib/site";

/**
 * Blok weryfikowalnych faktów o masażyście.
 *
 * Renderuje wyłącznie te pozycje, które są uzupełnione w `credentials`
 * w src/lib/site.ts. Dopóki pole jest puste, strona o nim milczy —
 * nic tu nie jest zmyślone ani wypełnione tekstem zastępczym.
 *
 * Jeżeli nie ma ani jednego faktu, komponent nie renderuje niczego,
 * bo pusta ramka „kwalifikacje" szkodzi bardziej niż jej brak.
 */
export function Credentials() {
  if (!hasCredentials()) return null;

  const years = yearsOfPractice();

  const rows: Array<{ label: string; value: string }> = [];

  if (credentials.diploma) {
    rows.push({
      label: "Dyplom",
      value: `${credentials.diploma.name} — ${credentials.diploma.issuer}, ${credentials.diploma.year}`,
    });
  }
  if (years) {
    rows.push({
      label: "Praktyka",
      value: `${years} ${years === 1 ? "rok" : years < 5 ? "lata" : "lat"} (od ${credentials.practiceSince})`,
    });
  }
  if (credentials.courses.length) {
    rows.push({ label: "Kursy", value: credentials.courses.join(" · ") });
  }
  if (credentials.visitsPerYear) {
    rows.push({ label: "Wizyty", value: `ok. ${credentials.visitsPerYear} rocznie` });
  }
  if (credentials.companyName || credentials.nip) {
    rows.push({
      label: "Firma",
      value: [credentials.companyName, credentials.nip && `NIP ${credentials.nip}`]
        .filter(Boolean)
        .join(", "),
    });
  }
  if (credentials.insurance) {
    rows.push({ label: "Ubezpieczenie", value: credentials.insurance });
  }

  return (
    <dl className="facts">
      {rows.map((r) => (
        <div className="fact" key={r.label}>
          <dt>{r.label}</dt>
          <dd>{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
