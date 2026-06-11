import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/our-mission")({
  head: () => ({
    meta: [
      { title: "Our Mission — Vectr" },
      { name: "description", content: "Operational velocity for critical infrastructure." },
      { property: "og:title", content: "Our Mission — Vectr" },
      { property: "og:description", content: "Engineered speed for the industries that power the world." },
    ],
  }),
  component: MissionPage,
});

const SECTIONS = [
  {
    num: "001",
    title: "The Friction",
    sub: "The Hidden Cost of 'The Middleman': a systemic inefficiency.",
    body: "Legacy staffing layers brokers between you and the workforce. Every layer adds latency, hides quality signals, and inflates cost. The result: delays, mismatches, and capital sitting idle.",
    subs: [
      { h: "Zero 'Rolodex' Guesswork", b: "Decisions driven by verified data, not who someone happened to call." },
      { h: "Direct Access with No Layering", b: "One platform connecting requirements to crews — no broker chains." },
      { h: "Predictive Crew Pipeline", b: "Forecasted availability so you never start a request from zero." },
    ],
  },
  {
    num: "002",
    title: "The Vectr Engine",
    sub: "Precision Through Automation",
    body: "Our platform fuses workforce data, compliance records, and field performance into a single mobilization engine — matching the right crew to the right site at the right time.",
    subs: [
      { h: "Identify Signals", b: "Match craft, certifications, and proven field history automatically." },
      { h: "Automate Validation", b: "Background, compliance, and fitness-for-duty cleared before dispatch." },
      { h: "Instant Deployment", b: "Coordinated arrival with real-time monitoring through Day 1." },
    ],
  },
  {
    num: "003",
    title: "The Outcome",
    sub: "Engineered for Execution",
    body: "When mobilization is precise, projects stay on schedule, margins stay protected, and overhead disappears. Vectr delivers outcomes — not invoices.",
    subs: [
      { h: "01 — Shield Your Margins", b: "Eliminate broker markup and wasted spend on no-shows." },
      { h: "02 — Protect Critical Timelines", b: "Verified crews on Day 1, every shift, every site." },
      { h: "03 — Pay for Value, Not Overhead", b: "Pricing tied to delivered crews, not layered intermediaries." },
    ],
  },
];

function MissionPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Navbar />
      <section className="hero mission-hero">
        <h1 className="h1">{"Operational Velocity".split(" ").map((w, i) => (
          <span key={i} className="hero-word" style={{ animationDelay: `${i * 0.08}s`, marginRight: "0.25em" }}>{w}</span>
        ))}</h1>
        <p className="sub hero-sub">Every day that your critical infrastructure sits idle or under-staffed drains capital. Vectr cuts traditional workforce mobilization timelines by 70%, deploying certified, specialized technical crews to Nuclear, Gas, and Data Center projects before the delay can hit your bottom line.</p>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="mission-accordion">
            {SECTIONS.map((s, i) => {
              const isOpen = open === i;
              return (
                <div key={s.num} className={`mission-item ${isOpen ? "open" : ""}`}>
                  <div className="mission-header" onClick={() => setOpen(isOpen ? null : i)}>
                    <div className="mission-num">
                      {s.num.split("").map((d, di) => <span key={di} className="digit">{d}</span>)}
                    </div>
                    <div className="mission-title">{s.title}</div>
                    <svg className="mission-chevron" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="mission-body" style={{ maxHeight: isOpen ? 2000 : 0 }}>
                    <div className="mission-body-inner">
                      <div>
                        <h3 className="h3" style={{ marginBottom: 16 }}>{s.sub}</h3>
                        <p className="muted" style={{ marginBottom: 24, lineHeight: 1.6 }}>{s.body}</p>
                        <div className="mission-subs">
                          {s.subs.map(sub => (
                            <div key={sub.h} className="sub-item">
                              <h4>{sub.h}</h4>
                              <p>{sub.b}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mission-img" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="container">
          <Reveal>
            <h2 className="h2">We are the bridge between digital intelligence and real world infrastructure.</h2>
            <p className="lead">Bureaucracy doesn't get to slow down the industries that power the world. This isn't resource supply. It's engineered speed.</p>
            <div className="closing-ctas">
              <Link to="/apply" className="btn btn-outline">Apply</Link>
              <Link to="/request-crew" className="btn btn-primary">Request Crews</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
