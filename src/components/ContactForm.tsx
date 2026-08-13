"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { cityNames, site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon, MailIcon } from "./Icons";

/**
 * Formularz bez backendu: składa wiadomość i otwiera ją
 * w WhatsApp lub w programie pocztowym klienta.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState<string>(cityNames[0]);
  const [service, setService] = useState(services[0].name);
  const [message, setMessage] = useState("");

  const composed = [
    `Dzień dobry, chcę umówić wizytę.`,
    `Imię: ${name || "—"}`,
    `Miasto: ${city}`,
    `Usługa: ${service}`,
    message ? `Dodatkowe informacje: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Rezerwacja — ${service} (${city})`
  )}&body=${encodeURIComponent(composed)}`;

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsappLink(composed), "_blank", "noopener");
      }}
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="f-name">Imię</label>
          <input
            id="f-name"
            type="text"
            placeholder="Twoje imię"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="given-name"
          />
        </div>
        <div className="field">
          <label htmlFor="f-city">Miasto</label>
          <select id="f-city" value={city} onChange={(e) => setCity(e.target.value)}>
            {cityNames.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-service">Usługa</label>
        <select id="f-service" value={service} onChange={(e) => setService(e.target.value)}>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name} — {s.priceFrom}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-msg">Preferowany termin / uwagi</label>
        <textarea
          id="f-msg"
          placeholder="Np. wtorek lub środa po 18:00, 5. piętro z windą…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="hero-ctas" style={{ marginTop: 0 }}>
        <button type="submit" className="btn btn--gold">
          <WhatsAppIcon size={17} /> Wyślij przez WhatsApp
        </button>
        <a href={mailHref} className="btn btn--ghost">
          <MailIcon size={17} /> Wyślij e-mailem
        </a>
      </div>

      <p className="form-note">
        Formularz otwiera gotową wiadomość w wybranej aplikacji — niczego nie zapisujemy na
        serwerze. Odpowiadam zwykle w ciągu godziny w godzinach pracy.
      </p>
    </form>
  );
}
