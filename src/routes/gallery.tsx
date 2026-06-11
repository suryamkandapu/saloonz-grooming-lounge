import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import h from "@/assets/service-haircut.jpg";
import b from "@/assets/service-beard.jpg";
import f from "@/assets/service-facial.jpg";
import br from "@/assets/service-bridal.jpg";
import c from "@/assets/service-color.jpg";
import s from "@/assets/service-style.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Saloonz | Transformations & Editorial Work" },
      { name: "description", content: "A masonry gallery of haircuts, beard work, colour and bridal transformations from Saloonz Mumbai." },
      { property: "og:title", content: "Gallery — Saloonz" },
      { property: "og:description", content: "Transformations from our chair." },
    ],
  }),
  component: Gallery,
});

type Cat = "all" | "hair" | "beard" | "color" | "skin";

const ITEMS: { img: string; cat: Exclude<Cat, "all">; tag: string }[] = [
  { img: h, cat: "hair", tag: "Hair" },
  { img: b, cat: "beard", tag: "Beard" },
  { img: c, cat: "color", tag: "Colour" },
  { img: f, cat: "skin", tag: "Skin" },
  { img: br, cat: "hair", tag: "Bridal" },
  { img: s, cat: "hair", tag: "Style" },
  { img: h, cat: "hair", tag: "Cut" },
  { img: b, cat: "beard", tag: "Shave" },
  { img: f, cat: "skin", tag: "Facial" },
  { img: c, cat: "color", tag: "Balayage" },
  { img: br, cat: "hair", tag: "Groom" },
  { img: s, cat: "hair", tag: "Pomp" },
];

const TABS: { key: Cat; label: string }[] = [
  { key: "all", label: "All" },
  { key: "hair", label: "Hair" },
  { key: "beard", label: "Beard" },
  { key: "color", label: "Colour" },
  { key: "skin", label: "Skin" },
];

function Gallery() {
  const [cat, setCat] = useState<Cat>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const filtered = cat === "all" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const items = grid.querySelectorAll(".masonry-item");
    items.forEach((el) => el.classList.remove("in"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => (e.target as HTMLElement).classList.add("in"), i * 60);
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.05 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [cat]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal><span className="eyebrow">Transformations</span></Reveal>
          <Reveal delay={120}><h1 className="h1" style={{ marginTop: 22 }}>The Gallery</h1></Reveal>
          <Reveal delay={240}><p className="lead" style={{ margin: "24px auto 0" }}>A living archive of work from our chairs — cuts, colour, beards and bridal moments.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-tabs">
            {TABS.map((t) => (
              <button key={t.key} className={`gallery-tab ${cat === t.key ? "active" : ""}`} onClick={() => setCat(t.key)}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="masonry" ref={gridRef} key={cat}>
            {filtered.map((it, i) => (
              <div key={i} className="masonry-item clickable" onClick={() => setLightbox(it.img)}>
                <span className="tag">{it.tag}</span>
                <img src={it.img} alt={it.tag} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`lightbox ${lightbox ? "open" : ""}`} onClick={() => setLightbox(null)}>
        <button className="close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
        {lightbox && <img src={lightbox} alt="Selected" onClick={(e) => e.stopPropagation()} />}
      </div>
    </>
  );
}
