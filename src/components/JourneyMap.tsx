/**
 * Sygnaturowa grafika hero: mapa obszaru działania z animowaną trasą
 * dojazdu — „masaż przyjeżdża do Ciebie”.
 */
export function JourneyMap() {
  return (
    <div className="journey" aria-label="Mapa obszaru działania: Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice">
      <svg viewBox="0 0 520 400" fill="none" role="img" aria-hidden>
        {/* siatka punktów */}
        <defs>
          <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.2" fill="rgba(255,255,255,0.07)" />
          </pattern>
          <radialGradient id="glow" cx="0.78" cy="0.78" r="0.6">
            <stop offset="0%" stopColor="rgba(200,169,106,0.22)" />
            <stop offset="100%" stopColor="rgba(200,169,106,0)" />
          </radialGradient>
        </defs>
        <rect width="520" height="400" fill="url(#dots)" />
        <rect width="520" height="400" fill="url(#glow)" />

        {/* delikatne linie łączące miasta z bazą */}
        <g stroke="rgba(255,255,255,0.13)" strokeWidth="1">
          <path d="M250 232 L150 152" />
          <path d="M250 232 L235 104" />
          <path d="M250 232 L392 118" />
          <path d="M250 232 L100 322" />
        </g>

        {/* animowana trasa: baza → Twój dom */}
        <path
          className="route"
          d="M250 232 C 300 260, 330 310, 408 316"
          stroke="#C8A96A"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* węzły miast */}
        <g>
          <circle cx="150" cy="152" r="5" fill="#2d3c52" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
          <circle className="pulse" cx="150" cy="152" r="9" stroke="rgba(200,169,106,0.5)" strokeWidth="1" />
          <text x="150" y="132" textAnchor="middle" fill="rgba(255,255,255,0.66)" fontSize="11.5" fontWeight="500" letterSpacing="0.08em">
            CZELADŹ
          </text>

          <circle cx="235" cy="104" r="5" fill="#2d3c52" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
          <circle className="pulse" cx="235" cy="104" r="9" stroke="rgba(200,169,106,0.5)" strokeWidth="1" style={{ animationDelay: "0.6s" }} />
          <text x="235" y="84" textAnchor="middle" fill="rgba(255,255,255,0.66)" fontSize="11.5" fontWeight="500" letterSpacing="0.08em">
            BĘDZIN
          </text>

          <circle cx="392" cy="118" r="5" fill="#2d3c52" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
          <circle className="pulse" cx="392" cy="118" r="9" stroke="rgba(200,169,106,0.5)" strokeWidth="1" style={{ animationDelay: "1.2s" }} />
          <text x="392" y="98" textAnchor="middle" fill="rgba(255,255,255,0.66)" fontSize="11.5" fontWeight="500" letterSpacing="0.08em">
            DĄBROWA GÓRNICZA
          </text>

          <circle cx="100" cy="322" r="5" fill="#2d3c52" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" />
          <circle className="pulse" cx="100" cy="322" r="9" stroke="rgba(200,169,106,0.5)" strokeWidth="1" style={{ animationDelay: "1.8s" }} />
          <text x="100" y="352" textAnchor="middle" fill="rgba(255,255,255,0.66)" fontSize="11.5" fontWeight="500" letterSpacing="0.08em">
            KATOWICE
          </text>
        </g>

        {/* baza: Sosnowiec */}
        <g>
          <circle cx="250" cy="232" r="7" fill="#C8A96A" />
          <circle className="pulse" cx="250" cy="232" r="13" stroke="#C8A96A" strokeWidth="1.2" style={{ animationDelay: "0.3s" }} />
          <text x="250" y="210" textAnchor="middle" fill="#dcc08a" fontSize="12" fontWeight="600" letterSpacing="0.1em">
            SOSNOWIEC
          </text>
          <text x="250" y="258" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="10" letterSpacing="0.14em">
            BAZA
          </text>
        </g>

        {/* cel: Twój dom */}
        <g>
          <circle cx="418" cy="316" r="21" fill="rgba(200,169,106,0.14)" stroke="rgba(200,169,106,0.55)" strokeWidth="1.2" />
          <g stroke="#dcc08a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M409 316.5 418 309l9 7.5" />
            <path d="M411.5 315.5v8h13v-8" />
          </g>
          <text x="418" y="356" textAnchor="middle" fill="#dcc08a" fontSize="12" fontWeight="600" letterSpacing="0.1em">
            TWÓJ DOM
          </text>
        </g>
      </svg>

      <div className="journey-caption">
        <strong>Obszar działania</strong>
        <span>5 miast · dojazd wliczony w cenę</span>
      </div>
    </div>
  );
}
