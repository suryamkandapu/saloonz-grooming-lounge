import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — Vectr" },
      { name: "description", content: "Join the Vectr verified crew network." },
      { property: "og:title", content: "Apply — Vectr" },
      { property: "og:description", content: "Apply to become part of a verified, elite crew." },
    ],
  }),
  component: ApplyPage,
});

const CRAFTS = ["Welder","Scaffolder","Electrician","Boilermaker","Laborer","Radiation Protection","Decontamination","Planner P6","Scheduler","HVAC Tech","Low Voltage Tech","Commissioning Agent","Cleanroom Tech","Orbital Welder","Tool Installer","Pipe Fitter","Administrative"];

function ApplyPage() {
  const [outage, setOutage] = useState<"yes" | "no">("yes");
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fields = [
    { label: "Full Name", el: <input type="text" required /> },
    { label: "Email Address", el: <input type="email" required /> },
    { label: "Phone Number", el: <input type="tel" required /> },
    { label: "Primary Craft / Trade", el: <select required defaultValue=""><option value="" disabled>Select…</option>{CRAFTS.map(c => <option key={c}>{c}</option>)}</select> },
    { label: "Years of Experience", el: <input type="number" min={0} required /> },
    { label: "Available for outage work?", el: (
      <div className="toggle-group">
        <button type="button" className={`toggle-btn ${outage === "yes" ? "active" : ""}`} onClick={() => setOutage("yes")}>Yes</button>
        <button type="button" className={`toggle-btn ${outage === "no" ? "active" : ""}`} onClick={() => setOutage("no")}>No</button>
      </div>
    ) },
    { label: "Upload Resume", el: (
      <div className="file-input">
        <input type="file" onChange={e => setFileName(e.target.files?.[0]?.name ?? "")} accept=".pdf,.doc,.docx" />
        <div className="file-label">{fileName || "Click to upload (PDF, DOC)"}</div>
      </div>
    ) },
    { label: "Message / Additional Info", el: <textarea /> },
  ];

  return (
    <>
      <Navbar />
      <section className="hero" style={{ minHeight: "60vh" }}>
        <h1 className="h1">{"Join the Vectr Network".split(" ").map((w, i) => (
          <span key={i} className="hero-word" style={{ animationDelay: `${i * 0.08}s`, marginRight: "0.25em" }}>{w}</span>
        ))}</h1>
        <p className="sub hero-sub">Apply to become part of a verified, elite crew. We match your skills to the highest-impact projects.</p>
      </section>

      <div className="form-page">
        {submitted ? (
          <div style={{ textAlign: "center", padding: 80 }}>
            <h2 className="h2">Thank you.</h2>
            <p className="lead" style={{ marginTop: 16 }}>Your application is in. We'll be in touch.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            {fields.map((f, i) => (
              <div key={f.label} className="form-field" style={{ animationDelay: `${i * 50}ms` }}>
                <label>{f.label}</label>
                {f.el}
              </div>
            ))}
            <button type="submit" className="btn btn-primary btn-block">Submit Application</button>
          </form>
        )}
      </div>

      <Footer />
    </>
  );
}
