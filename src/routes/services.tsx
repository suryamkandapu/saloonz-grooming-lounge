import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import svcHaircut from "@/assets/service-haircut.jpg";
import svcBeard from "@/assets/service-beard.jpg";
import svcFacial from "@/assets/service-facial.jpg";
import svcBridal from "@/assets/service-bridal.jpg";
import svcColor from "@/assets/service-color.jpg";
import svcStyle from "@/assets/service-style.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Saloonz | Luxury Grooming Menu" },
      { name: "description", content: "Haircuts, beard rituals, facials, hair colour, traditional shave and bridal grooming at Saloonz Mumbai." },
      { property: "og:title", content: "Services — Saloonz" },
      { property: "og:description", content: "Crafted rituals for the modern Indian gentleman." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { num: "01", title: "Signature Haircut", img: svcHaircut, desc: "Editorial men's cuts engineered to your bone structure with a hot towel finish.", price: "₹1,200 – ₹2,800" },
  { num: "02", title: "Royal Beard Ritual", img: svcBeard, desc: "Straight razor, hot towel, oud beard oil and a sculpted line-up.", price: "₹900 – ₹1,800" },
  { num: "03", title: "Gentleman's Facial", img: svcFacial, desc: "Deep clean, gold-leaf mask and lymphatic massage. Forty-five minutes of stillness.", price: "₹2,400 – ₹4,200" },
  { num: "04", title: "Hair Colour Studio", img: svcColor, desc: "Balayage, global colour and grey-blending with L'Oréal Professional.", price: "₹3,200 – ₹9,500" },
  { num: "05", title: "Traditional Shave", img: svcStyle, desc: "The ninety-year ritual — open blade, sandalwood lather, a cold towel close.", price: "₹800" },
  { num: "06", title: "Bridal & Event Lounge", img: svcBridal, desc: "A private suite for grooms — trial, day-of styling and on-location service.", price: "₹6,500+" },
];

function Services() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal><span className="eyebrow">The Menu</span></Reveal>
          <Reveal delay={120}><h1 className="h1" style={{ marginTop: 22 }}>Services & Rituals</h1></Reveal>
          <Reveal delay={240}><p className="lead" style={{ margin: "24px auto 0" }}>Six house specialties, each carried out by a senior stylist. Every appointment includes a consultation, a single-malt or chai, and time to actually breathe.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-page-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.num} delay={(i % 3) * 100}>
                <div className="svc-card clickable">
                  <div className="img" style={{ backgroundImage: `url(${s.img})` }} />
                  <div className="shade" />
                  <div className="body">
                    <span className="num">{s.num}</span>
                    <h3 className="h3">{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="price">{s.price}</span>
                    <Link to="/contact" className="cta">Book Now →</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: "#080808", borderTop: "1px solid var(--line)" }}>
        <div className="container center">
          <Reveal><h2 className="h2" style={{ marginBottom: 28 }}>Not sure which ritual?</h2></Reveal>
          <Reveal delay={120}><p className="lead" style={{ margin: "0 auto 32px" }}>WhatsApp us a recent photo. A senior stylist will recommend a look in under an hour.</p></Reveal>
          <Reveal delay={240}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/919999999999" className="btn btn-solid">Chat on WhatsApp</a>
              <Link to="/contact" className="btn">Book Online</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
