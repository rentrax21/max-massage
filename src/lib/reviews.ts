/**
 * ⚠️ OPINIE PRZYKŁADOWE (placeholder) — podmień na prawdziwe opinie
 * klientów z Twojej wizytówki Google. Link do wizytówki ustawisz
 * w src/lib/site.ts (googleReviewsUrl).
 */

export type Review = {
  name: string;
  place: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Marta",
    place: "Katowice",
    text:
      "Pracuję zdalnie i kark miałam w opłakanym stanie. Po trzech wizytach różnica jest ogromna — a to, że nie muszę nigdzie jechać, to dla mnie największy plus. Pełen profesjonalizm.",
  },
  {
    name: "Tomasz",
    place: "Sosnowiec",
    text:
      "Biegam maratony i masaż regeneracyjny co dwa tygodnie to u mnie stały punkt planu. Konkretna, głęboka praca na mięśniach. Stół, olejki, wszystko przywiezione — ja tylko otwieram drzwi.",
  },
  {
    name: "Agnieszka",
    place: "Dąbrowa Górnicza",
    text:
      "Kobido totalnie mnie kupiło. Twarz wygląda świeżo, a napięcie żuchwy, o którym nawet nie wiedziałam, zniknęło. Bardzo miła, spokojna atmosfera w moim własnym salonie.",
  },
  {
    name: "Piotr",
    place: "Będzin",
    text:
      "Prezent dla żony na rocznicę — masaż dla par u nas w domu. Poziom jak w dobrym hotelowym SPA, tylko bez wychodzenia z mieszkania. Na pewno powtórzymy.",
  },
  {
    name: "Karolina",
    place: "Czeladź",
    text:
      "Po całym dniu na nogach drenaż limfatyczny to zbawienie. Nogi lekkie jak nigdy. Punktualnie, profesjonalnie i bez żadnego kombinowania z dojazdem — polecam każdemu z Czeladzi.",
  },
  {
    name: "Michał",
    place: "Katowice",
    text:
      "Siedzę przy komputerze po 10 godzin dziennie. Masaż klasyczny raz w tygodniu ustawił mi plecy na nowo. Świetny kontakt, elastyczne godziny wieczorne — w końcu usługa dopasowana do ludzi, którzy pracują.",
  },
];
