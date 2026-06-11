import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import portrait1 from "@/assets/service-haircut.jpg";
import portrait2 from "@/assets/service-beard.jpg";
import portrait3 from "@/assets/service-facial.jpg";
import portrait4 from "@/assets/service-style.jpg";
import storyImg from "@/assets/salon-hero.jpg";
import storyImg2 from "@/assets/service-bridal.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Saloonz | A Luxury Indian Grooming Lounge" },
      { name: "description", content: "Saloonz was born in 2010 in Mumbai. A timeline, a team, and the philosophy behind the lounge." },
      { property: "og:title", content: "Our Story — Saloonz" },
      { property: "og:description", content: "The people, the years and the rituals behind Saloonz." },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2010", title: "The first chair", desc: "Founded above a coffee shop in Bandra with a single barber chair and a brass mirror." },
  { year: "2014", title: "The Lounge", desc: "Moved to a 2,400 sq ft heritage space, designed by Studio Lotus." },
  { year: "2018", title: "Bridal suite opens", desc: "Launched a private suite for grooms — by appointment only." },
  { year: "2022", title: "Award winning", desc: "Vogue India names Saloonz one of the country's ten finest grooming lounges." },
  { year: "2024", title: "10,000 chairs filled", desc: "A decade and a half. Ten thousand clients. One philosophy." },
];

const TEAM = [
  { name: "Vikram Singh", spec: "Master Stylist", photo: portrait1, quote: "A haircut is half craft, half conversation." },
  { name: "Rohan Iyer", spec: "Beard Specialist", photo: portrait2, quote: "The straight razor is honest. It tells you everything." },
  { name: "Aditya Rao", spec: "Skin & Facials", photo: portrait3, quote: "Glow is a habit, not a treatment." },
  { name: "Karan Bhatia", spec: "Colour Director", photo: portrait4, quote: "Colour is light made wearable." },
];

const STATS = [
  { v: 10000, label: "Happy Clients", suffix: "+" },
  { v: 15, label: "Years of Craft", suffix: "+" },
  { v: 12, label: "Master Stylists", suffix: "" },
  { v: 4.9, label: "Google Rating", suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(value * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  const display = value >= 100 ? Math.round(n).toLocaleString() : n.toFixed(1).replace(/\.0$/, "");
  return <span ref={ref}>{display}{suffix}</span>;
}

function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal><span className="eyebrow">Our Story</span></Reveal>
          <Reveal delay={120}><h1 className="h1" style={{ marginTop: 22 }}>Fifteen years.<br />One philosophy.</h1></Reveal>
          <Reveal delay={240}><p className="lead" style={{ margin: "24px auto 0" }}>Saloonz is what happens when Indian barbering tradition meets editorial precision — held together by people who actually care.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="story-block">
            <Reveal><div className="story-img" style={{ backgroundImage: `url(${storyImg})` }} /></Reveal>
            <div>
              <Reveal><span className="eyebrow">The Beginning</span></Reveal>
              <Reveal delay={120}><h2 className="h2" style={{ margin: "22px 0 24px" }}>Born above a coffee shop in Bandra.</h2></Reveal>
              <Reveal delay={240}><p className="lead">In 2010, our founder Vikram packed a brass mirror and a single chair into a 200 sq ft room. He poured single-malts for first-time clients and stayed open past midnight. Some of those clients still come.</p></Reveal>
            </div>
          </div>
          <div className="story-block rev">
            <Reveal><div className="story-img" style={{ backgroundImage: `url(${storyImg2})` }} /></Reveal>
            <div>
              <Reveal><span className="eyebrow">The Lounge Today</span></Reveal>
              <Reveal delay={120}><h2 className="h2" style={{ margin: "22px 0 24px" }}>A 2,400 sq ft sanctuary.</h2></Reveal>
              <Reveal delay={240}><p className="lead">Brass, mahogany, low light and one rule — nobody is rushed. Every chair gets ninety minutes whether it needs them or not.</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#080808" }}>
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow">The Journey</span></Reveal>
            <Reveal delay={120}><h2 className="h2" style={{ marginTop: 22 }}>Milestones in moments.</h2></Reveal>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 100} className="t-item">
                <div className="t-content">
                  <div className="t-year">{t.year}</div>
                  <div className="t-title">{t.title}</div>
                  <div className="t-desc">{t.desc}</div>
                </div>
                <div className="t-dot" />
                <div className="t-spacer" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow">The Hands</span></Reveal>
            <Reveal delay={120}><h2 className="h2" style={{ marginTop: 22 }}>Meet the stylists.</h2></Reveal>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="team-card">
                  <div className="team-photo" style={{ backgroundImage: `url(${m.photo})` }} />
                  <h4>{m.name}</h4>
                  <div className="spec">{m.spec}</div>
                  <div className="quote">"{m.quote}"</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#080808" }}>
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow">Why Us</span></Reveal>
            <Reveal delay={120}><h2 className="h2" style={{ marginTop: 22 }}>By the numbers.</h2></Reveal>
          </div>
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="stat">
                  <div className="num"><Counter value={s.v} suffix={s.suffix} /></div>
                  <div className="label">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
