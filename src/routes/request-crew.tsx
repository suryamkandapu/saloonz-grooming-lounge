import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/request-crew")({
  head: () => ({
    meta: [
      { title: "Request a Crew — Vectr" },
      { name: "description", content: "Activate Vectr's mobilization engine." },
      { property: "og:title", content: "Request a Crew — Vectr" },
      { property: "og:description", content: "Deploy a verified, precision-matched crew." },
    ],
  }),
  component: RequestCrewPage,
});

function RequestCrewPage() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const fields: { label: string; el: React.ReactNode }[] = [
    { label: "Company Name", el: <input type="text" required /> },
    { label: "Contact Name", el: <input type="text" required /> },
    { label: "Email", el: <input type="email" required /> },
    { label: "Phone", el: <input type="tel" required /> },
    { label: "Industry", el: <select required defaultValue=""><option value="" disabled>Select…</option><option>Nuclear</option><option>Gas</option><option>Data Center</option><option>Semiconductor</option></select> },
    { label: "Craft Types Needed", el: <input type="text" placeholder="e.g. Welders, Electricians, Scaffolders" required /> },
    { label: "Number of Workers", el: <input type="number" min={1} required /> },
    { label: "Project Start Date", el: <input type="date" required /> },
    { label: "Project Duration", el: <select required defaultValue=""><option value="" disabled>Select…</option><option>1 week</option><option>2 weeks</option><option>1 month</option><option>3 months</option><option>6+ months</option></select> },
    { label: "Site Location", el: <input type="text" required /> },
    { label: "Special Certifications Required?", el: <textarea /> },
    { label: "Additional Notes", el: <textarea /> },
  ];

  return (
    <>
      <Navbar />
      <section className="hero" style={{ minHeight: "60vh" }}>
        <h1 className="h1">{"Request a Crew".split(" ").map((w, i) => (
          <span key={i} className="hero-word" style={{ animationDelay: `${i * 0.08}s`, marginRight: "0.25em" }}>{w}</span>
        ))}</h1>
        <p className="sub hero-sub">One request activates our entire mobilization engine. Tell us your requirements and we'll deploy a verified, precision-matched crew.</p>
      </section>

      <div className="form-page">
        {submitted ? (
          <div style={{ textAlign: "center", padding: 80 }}>
            <h2 className="h2">Request received.</h2>
            <p className="lead" style={{ marginTop: 16 }}>Our team will be in touch within hours.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            {fields.map((f, i) => (
              <div key={f.label} className="form-field" style={{ animationDelay: `${i * 50}ms` }}>
                <label>{f.label}</label>
                {f.el}
              </div>
            ))}
            <button type="submit" className="btn btn-primary btn-block">Request Crews</button>
          </form>
        )}
      </div>

      <Footer />
    </>
  );
}
