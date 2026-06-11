import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Saloonz | Contact" },
      { name: "description", content: "Book your chair at Saloonz Mumbai. Visit our Bandra lounge or message us on WhatsApp." },
      { property: "og:title", content: "Book — Saloonz" },
      { property: "og:description", content: "Reserve your chair at Saloonz." },
    ],
  }),
  component: Contact,
});

const SERVICES = ["Signature Haircut", "Royal Beard Ritual", "Gentleman's Facial", "Hair Colour", "Traditional Shave", "Bridal / Event"];

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal><span className="eyebrow">Reserve</span></Reveal>
          <Reveal delay={120}><h1 className="h1" style={{ marginTop: 22 }}>Book Your Chair</h1></Reveal>
          <Reveal delay={240}><p className="lead" style={{ margin: "24px auto 0" }}>Tell us when, what and who. A stylist will confirm within the hour.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <form onSubmit={onSubmit}>
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" required placeholder="Your full name" />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" required placeholder="+91 99999 99999" />
                </div>
                <div className="form-field">
                  <label htmlFor="service">Service</label>
                  <select id="service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="date">Preferred Date</label>
                  <input id="date" type="date" required />
                </div>
                <div className="form-field">
                  <label htmlFor="msg">Notes</label>
                  <textarea id="msg" placeholder="Anything specific we should know?" />
                </div>
                <button type="submit" className="btn btn-solid btn-pulse" style={{ width: "100%" }}>
                  {sent ? "Received — we'll be in touch ✓" : "Request Appointment"}
                </button>
              </form>
            </Reveal>

            <Reveal delay={120}>
              <div className="contact-side">
                <div className="map-embed" />
                <h3>Visit the Lounge</h3>
                <p>14, Linking Road</p>
                <p>Bandra West, Mumbai 400050</p>
                <p style={{ marginTop: 16 }}><a href="tel:+919999999999" style={{ color: "var(--gold)" }}>+91 99999 99999</a></p>
                <p><a href="mailto:hello@saloonz.in" style={{ color: "var(--gold)" }}>hello@saloonz.in</a></p>

                <h3 style={{ marginTop: 32 }}>Hours</h3>
                <div className="hours">
                  <span className="day">Mon – Fri</span><span className="time">10:00 — 21:00</span>
                  <span className="day">Saturday</span><span className="time">09:00 — 22:00</span>
                  <span className="day">Sunday</span><span className="time">10:00 — 20:00</span>
                </div>

                <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="https://wa.me/919999999999" className="btn" style={{ flex: 1 }}>WhatsApp</a>
                  <a href="tel:+919999999999" className="btn btn-ghost" style={{ flex: 1 }}>Call</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
