import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/salon-hero.jpg";
import svcHaircut from "@/assets/service-haircut.jpg";
import svcBeard from "@/assets/service-beard.jpg";
import svcBridal from "@/assets/service-bridal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saloonz — The Grooming Lounge | Luxury Indian Salon" },
      { name: "description", content: "Cinematic haircuts, royal beard rituals and bridal grooming. A luxury Indian salon in Mumbai. Est. 2010." },
      { property: "og:title", content: "Saloonz — The Grooming Lounge" },
      { property: "og:description", content: "A luxury Indian grooming lounge." },
    ],
  }),
  component: Home,
});

const HERO_WORDS = ["Where", "Grooming", "Becomes", "Ritual."];

const TRUST = ["Est. 2010", "10,000+ Clients", "Award Winning 2024", "Premium Products", "Master Stylists", "Loved by Mumbai"];

const SVC = [
  { num: "01", title: "Signature Cuts", img: svcHaircut, desc: "Editorial men's haircuts shaped to your bone structure.", price: "From ₹1,200" },
  { num: "02", title: "Royal Beard Ritual", img: svcBeard, desc: "Hot towel, straight razor, oud-infused balms.", price: "From ₹900" },
  { num: "03", title: "Bridal Grooming", img: svcBridal, desc: "A pre-wedding lounge for the groom — by appointment.", price: "From ₹6,500" },
];

const TST = [
  { quote: "I have been chased by stylists across three continents. None of them carved a fade the way Saloonz did. It is theatre.", author: "Arjun Mehta", role: "Creative Director, Mumbai" },
  { quote: "The hot towel ritual alone is worth flying back for. A masterclass in restraint and indulgence.", author: "Rohan Kapadia", role: "Author" },
  { quote: "My groom's lounge appointment turned into the calmest two hours of the entire wedding week.", author: "Ishaan Verma", role: "Groom, 2024" },
];

function Home() {
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTIdx((i) => (i + 1) % TST.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="hero-overlay" />
        <div className="bokeh">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} style={{
              left: `${(i * 6.3 + 4) % 100}%`,
              width: `${4 + (i % 4) * 2}px`,
              height: `${4 + (i % 4) * 2}px`,
              animationDuration: `${10 + (i % 6) * 3}s`,
              animationDelay: `${(i * 0.7) % 9}s`,
              opacity: 0,
            }} />
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow">Saloonz · Estd. 2010 · Mumbai</span>
          </div>
          <h1 className="display h-hero hero-title">
            {HERO_WORDS.map((w, i) => (
              <span key={i} className="word" style={{ animationDelay: `${0.3 + i * 0.18}s`, marginRight: i < HERO_WORDS.length - 1 ? ".25em" : 0 }}>
                {w}
              </span>
            ))}
          </h1>
          <span className="hero-rule" />
          <p className="hero-sub">A cinematic grooming lounge where Indian craft meets editorial precision. Walk in. Be transformed.</p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-solid btn-pulse">Book Your Chair</Link>
            <Link to="/services" className="btn">Explore Services</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <span className="bar" />
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...TRUST, ...TRUST, ...TRUST].map((t, i) => (
            <span key={i} className="marquee-item"><span className="dot" />{t}</span>
          ))}
        </div>
      </div>

      {/* ABOUT INTRO */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "center" }}>
          <Reveal>
            <div style={{ aspectRatio: "4/5", backgroundImage: `url(${svcHaircut})`, backgroundSize: "cover", backgroundPosition: "center", border: "1px solid var(--line)" }} />
          </Reveal>
          <div>
            <Reveal><span className="eyebrow" style={{ marginBottom: 24 }}>The Lounge</span></Reveal>
            <Reveal delay={120}>
              <h2 className="h2" style={{ marginTop: 22, marginBottom: 28 }}>
                Fifteen years of <span className="gold">precise hands</span>,<br /> moody mirrors and unhurried rituals.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="lead" style={{ marginBottom: 36 }}>
                Saloonz was born from a single idea — that a haircut should feel like an event. Today, our master stylists work from a chiaroscuro lounge in Bandra, blending classic Indian barbering with modern editorial styling.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <Link to="/about" className="btn">Read Our Story</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="section" style={{ background: "#080808" }}>
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow">Signature Services</span></Reveal>
            <Reveal delay={120}><h2 className="h2" style={{ marginTop: 22 }}>Crafted rituals for the modern Indian gentleman.</h2></Reveal>
          </div>
          <div className="svc-grid">
            {SVC.map((s, i) => (
              <Reveal key={s.num} delay={i * 120}>
                <Link to="/services" className="svc-card clickable" style={{ display: "block" }}>
                  <div className="img" style={{ backgroundImage: `url(${s.img})` }} />
                  <div className="shade" />
                  <div className="body">
                    <span className="num">{s.num}</span>
                    <h3 className="h3">{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="price">{s.price}</span>
                    <span className="cta">View Service →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="center" style={{ marginTop: 60 }}>
            <Reveal><Link to="/services" className="btn">Full Menu</Link></Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow">In Their Words</span></Reveal>
            <Reveal delay={120}><h2 className="h2" style={{ marginTop: 22 }}>Loved by Mumbai's most discerning.</h2></Reveal>
          </div>
          <div className="tst-wrap">
            <div className="tst-track" style={{ transform: `translateX(-${tIdx * 100}%)` }}>
              {TST.map((t, i) => (
                <div key={i} className="tst-card" style={{ opacity: i === tIdx ? 1 : .25, filter: i === tIdx ? "blur(0)" : "blur(4px)" }}>
                  <span className="quote-mark">"</span>
                  <p className="quote">{t.quote}</p>
                  <div className="author">{t.author}</div>
                  <div className="role">{t.role}</div>
                </div>
              ))}
            </div>
            <div className="tst-dots">
              {TST.map((_, i) => (
                <button key={i} className={`tst-dot ${i === tIdx ? "active" : ""}`} onClick={() => setTIdx(i)} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section-sm" style={{ background: "#080808", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container center">
          <Reveal><span className="eyebrow" style={{ justifyContent: "center" }}>Reserve Your Chair</span></Reveal>
          <Reveal delay={120}><h2 className="h2" style={{ marginTop: 22, marginBottom: 28 }}>The chair is warm. The mirror is waiting.</h2></Reveal>
          <Reveal delay={240}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-solid btn-pulse">Book Appointment</Link>
              <a href="https://wa.me/919999999999" className="btn">WhatsApp Us</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
