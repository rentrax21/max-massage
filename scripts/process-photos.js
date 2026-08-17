/**
 * Przetwarza oryginały z sesji zdjęciowej do public/foto/.
 *
 *   node scripts/process-photos.js
 *
 * Wejście: paczka WeTransfer w katalogu głównym repo (nie trafia do gita).
 * Wyjście: JPEG max 2000 px dłuższy bok, mozjpeg q80 + base64 blur
 * placeholder (16 px) zapisany do src/lib/photos.generated.json.
 *
 * next/image i tak przekoduje te pliki na AVIF/WebP przy serwowaniu —
 * tutaj chodzi tylko o rozsądny rozmiar źródła i stałe wymiary
 * (bez nich leci CLS).
 *
 * Uwaga: oryginały mają EXIF orientation=8, dlatego wymiary czytamy
 * dopiero z gotowego pliku, po zastosowaniu .rotate().
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const sharp = require(path.join(ROOT, "node_modules/sharp"));
const BIG = path.join(ROOT, "wetransfer_duze-obrobione_2026-08-15_0654");
const SRC_TREATMENT = path.join(BIG, "masaż_obrobione");
const SRC_STUDIO = path.join(BIG, "duże obrobione");
const OUT = path.join(ROOT, "public/foto");

/** [plik źródłowy, folder, slug docelowy] */
const MAP = [
  // ── Zabieg w domu klienta (ciepłe, naturalne światło) ──
  ["_F0A6917.jpg", SRC_TREATMENT, "kark-praca"],        // terapeuta pracuje na karku, widoczna twarz klienta
  ["_F0A7044.jpg", SRC_TREATMENT, "udo-zloto"],          // terapeuta w złotym świetle, drewno w tle
  ["_F0A6875.jpg", SRC_TREATMENT, "plecy-dloni"],        // pełna sylwetka terapeuty, praca na plecach
  ["_F0A6882.jpg", SRC_TREATMENT, "plecy-spokoj"],
  ["_F0A6897.jpg", SRC_TREATMENT, "bark-kciuk"],
  ["_F0A6921.jpg", SRC_TREATMENT, "lopatka-punkt"],
  ["_F0A6936.jpg", SRC_TREATMENT, "olejek-dlon"],
  ["_F0A6941.jpg", SRC_TREATMENT, "olejek-nalewanie"],
  ["_F0A6956.jpg", SRC_TREATMENT, "plecy-obie-dlonie"],
  ["_F0A6960.jpg", SRC_TREATMENT, "dlon-detal"],
  ["_F0A6983.jpg", SRC_TREATMENT, "lydka-zloto"],
  ["_F0A6987.jpg", SRC_TREATMENT, "plecy-zloto"],
  ["_F0A7011.jpg", SRC_TREATMENT, "noga-drewno"],
  ["_F0A7019.jpg", SRC_TREATMENT, "lydka-kostki"],
  ["_F0A7040.jpg", SRC_TREATMENT, "udo-nacisk"],
  // poziome
  ["_F0A6901.jpg", SRC_TREATMENT, "kark-z-gory"],
  ["_F0A7032.jpg", SRC_TREATMENT, "lydka-szeroki"],
  ["_F0A7035.jpg", SRC_TREATMENT, "lydka-oburacz"],
  ["_F0A7053.jpg", SRC_TREATMENT, "oklepywanie"],
  // ── Studio (białe tło) ──
  ["_F0A6503.jpg", SRC_STUDIO, "portret-polo"],
  ["_F0A6583.jpg", SRC_STUDIO, "portret-koszula"],
  ["_F0A6646.jpg", SRC_STUDIO, "przy-stole"],
  ["_F0A6648.jpg", SRC_STUDIO, "lotos"],
  ["_F0A6687.jpg", SRC_STUDIO, "portret-usmiech"],
];

const MAX = 2000;

/** Zdjęcie na tło obrazka do udostępnień (Open Graph) — kadr poziomy. */
const OG_SOURCE = "_F0A7053.jpg";

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const manifest = {};

  for (const [file, dir, slug] of MAP) {
    const src = path.join(dir, file);
    if (!fs.existsSync(src)) {
      console.error("BRAK:", src);
      continue;
    }
    const dest = path.join(OUT, `${slug}.jpg`);
    // .rotate() bez argumentu stosuje orientację z EXIF (te pliki mają orientation=8),
    // więc wymiary wyjściowe czytamy dopiero z gotowego pliku.
    const { width: w, height: h } = await sharp(src)
      .rotate()
      .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(dest);

    // blur placeholder
    const blurBuf = await sharp(src)
      .rotate()
      .resize({ width: 16, height: 16, fit: "inside" })
      .jpeg({ quality: 40 })
      .toBuffer();

    manifest[slug] = {
      src: `/foto/${slug}.jpg`,
      width: w,
      height: h,
      blurDataURL: `data:image/jpeg;base64,${blurBuf.toString("base64")}`,
    };

    const kb = Math.round(fs.statSync(dest).size / 1024);
    console.log(`${slug.padEnd(20)} ${w}x${h}  ${kb} kB`);
  }

  fs.writeFileSync(
    path.join(ROOT, "src/lib/photos.generated.json"),
    JSON.stringify(manifest, null, 2),
  );
  console.log(`\n${Object.keys(manifest).length} zdjęć → public/foto/`);

  // tło obrazka do udostępnień (app/opengraph-image.tsx wczytuje go z dysku)
  const ogSrc = path.join(SRC_TREATMENT, OG_SOURCE);
  if (fs.existsSync(ogSrc)) {
    await sharp(ogSrc)
      .rotate()
      .resize(1200, 630, { fit: "cover", position: "centre" })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(path.join(OUT, "og-bg.jpg"));
    console.log("og-bg.jpg          1200x630");
  } else {
    console.error("BRAK źródła og-bg:", ogSrc);
  }
})();
