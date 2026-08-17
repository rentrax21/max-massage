/**
 * ─────────────────────────────────────────────────────────────
 *  KATALOG ZDJĘĆ
 *  Pliki leżą w public/foto/. Wymiary i placeholdery blur
 *  są generowane ze zdjęć źródłowych do photos.generated.json.
 *
 *  Żeby dodać zdjęcie: wrzuć plik do public/foto/, dopisz wpis
 *  do generated.json (lub uruchom skrypt) i dodaj tu opis alt.
 * ─────────────────────────────────────────────────────────────
 */

import generated from "./photos.generated.json";

export type PhotoKey = keyof typeof generated;

export type Photo = {
  key: PhotoKey;
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
  /** tekst alternatywny — opisowy, nie „zdjęcie masażu” */
  alt: string;
  /** orientacja — pomaga dobrać kadr w komponentach */
  orient: "portrait" | "landscape";
};

/** Opisy alt — jedyne miejsce, gdzie się je edytuje. */
const ALT: Record<PhotoKey, string> = {
  "kark-praca":
    "Masażysta rozluźnia kark leżącego klienta podczas masażu w jego mieszkaniu",
  "udo-zloto":
    "Masaż uda w ciepłym, popołudniowym świetle — praca dłońmi na mięśniu",
  "plecy-dloni": "Masaż pleców na przenośnym stole w domu klienta",
  "plecy-spokoj": "Spokojna praca na mięśniach grzbietu podczas masażu klasycznego",
  "bark-kciuk": "Ucisk kciukiem na napięty mięsień barku",
  "lopatka-punkt": "Praca punktowa w okolicy łopatki — rozluźnianie napięcia",
  "olejek-dlon": "Nanoszenie olejku do masażu na dłoń przed zabiegiem",
  "olejek-nalewanie": "Olejek do masażu nalewany na dłoń nad plecami klienta",
  "plecy-obie-dlonie": "Obie dłonie masażysty pracujące na natłuszczonych plecach",
  "dlon-detal": "Zbliżenie dłoni masażysty podczas ugniatania mięśnia",
  "lydka-zloto": "Masaż łydki w złotym świetle zachodzącego słońca",
  "plecy-zloto": "Dłonie na plecach klienta w ciepłym świetle okna",
  "noga-drewno": "Masaż nogi przy drewnianej ścianie w mieszkaniu klienta",
  "lydka-kostki": "Rozluźnianie łydki kostkami dłoni",
  "udo-nacisk": "Zdecydowany nacisk na mięsień uda podczas masażu sportowego",
  "kark-z-gory": "Masaż karku widziany z góry — dłonie po obu stronach szyi",
  "lydka-szeroki": "Obie dłonie masażysty pracujące wzdłuż łydki",
  "lydka-oburacz": "Masaż łydki oburącz w ciepłym świetle",
  oklepywanie: "Oklepywanie — technika kończąca masaż klasyczny",
  "portret-polo": "Maks — masażysta, portret w studiu",
  "portret-koszula": "Maks w białej koszuli — portret sylwetkowy",
  "przy-stole": "Maks przy rozłożonym przenośnym stole do masażu",
  lotos: "Maks siedzący w pozycji lotosu na stole do masażu",
  "portret-usmiech": "Uśmiechnięty portret masażysty przy stole do masażu",
};

function build(key: PhotoKey): Photo {
  const g = generated[key];
  return {
    key,
    src: g.src,
    width: g.width,
    height: g.height,
    blurDataURL: g.blurDataURL,
    alt: ALT[key],
    orient: g.width >= g.height ? "landscape" : "portrait",
  };
}

export const photos = Object.fromEntries(
  (Object.keys(generated) as PhotoKey[]).map((k) => [k, build(k)]),
) as Record<PhotoKey, Photo>;

/** Skrót: photo("kark-praca") */
export function photo(key: PhotoKey): Photo {
  return photos[key];
}

/* ── Zestawy używane na stronie ───────────────────────────── */

/**
 * Pasek galerii na stronie głównej.
 * Celowo bez zdjęć użytych wyżej na tej samej stronie (hero `kark-praca`
 * oraz `przy-stole`, `kark-z-gory`, `plecy-zloto` z sekcji „dlaczego
 * mobilnie") — powtórzony kadr kilkaset pikseli niżej wygląda jak błąd.
 */
export const galleryKeys: PhotoKey[] = [
  "bark-kciuk",
  "lydka-szeroki",
  "oklepywanie",
  "dlon-detal",
  "lydka-oburacz",
  "noga-drewno",
  "plecy-obie-dlonie",
  "lopatka-punkt",
  "lydka-kostki",
  "plecy-spokoj",
  "udo-zloto",
  "olejek-dlon",
];

/** Zdjęcie wiodące dla każdej usługi (slug → klucz zdjęcia). */
export const servicePhoto: Record<string, PhotoKey> = {
  "masaz-klasyczny": "plecy-dloni",
  "masaz-relaksacyjny": "plecy-zloto",
  "masaz-regeneracyjny": "udo-nacisk",
  "masaz-kobido": "kark-praca",
  "masaz-limfatyczny": "lydka-zloto",
};

/** Zdjęcie wiodące dla podstrony miasta — różne, żeby strony nie były bliźniacze. */
export const cityPhoto: Record<string, PhotoKey> = {
  "masaz-sosnowiec": "plecy-zloto",
  "masaz-dabrowa-gornicza": "lydka-szeroki",
  "masaz-bedzin": "bark-kciuk",
  "masaz-czeladz": "noga-drewno",
  "masaz-katowice": "kark-praca",
};
