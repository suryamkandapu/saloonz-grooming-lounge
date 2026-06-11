import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer, CTABanner } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Our Industries — Vectr" },
      { name: "description", content: "Nuclear power, gas turbines, data centers and semiconductor staffing." },
      { property: "og:title", content: "Our Industries — Vectr" },
      { property: "og:description", content: "Nuclear, gas, data centers, semiconductors." },
    ],
  }),
  component: IndustriesPage,
});

const INDUSTRIES = [
  { key: "nuclear", label: "Nuclear Power", title: "Precision staffing for nuclear facilities and outages", body: "We deploy radiation-cleared, certified crews to meet the strictest operational and safety standards in the industry.", roles: ["Schedulers","Welders","Radiation Protection","Scaffolders","Administrative","Boilermakers","Electricians","Decontamination","Planners P6"] },
  { key: "gas", label: "Gas", title: "Turbine and gas-plant crews, mobilized fast", body: "Verified, outage-ready crews built for combustion, turbine, and gas-plant environments.", roles: ["Schedulers","Welders","Scaffolders","Laborers","Administrative","Boilermakers","Electricians","Planners P6"] },
  { key: "data", label: "Data Centers", title: "Mission-critical staffing for hyperscale builds", body: "From low-voltage to commissioning, we staff the trades that bring data halls online.", roles: ["Low Voltage Techs","HVAC Techs","Electricians","Environmental Electricians","Commissioning Agents","Laborers","Scaffolders","Planners P6","Welders"] },
  { key: "semi", label: "Semiconductors", title: "Cleanroom-ready crews for fab construction", body: "Tool installers, orbital welders, and cleanroom-qualified technicians for semiconductor fabs.", roles: ["Cleanroom Techs","Orbital Welders","Tool Installers","Hook Up Techs","Pipe Fitters","Welders","Electricians","Planners P6"] },
];

function IndustriesPage() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-bg" />
        <h1 className="h1">{"Staffing the World's Critical Systems".split(" ").map((w, i) => (
          <span key={i} className="hero-word" style={{ animationDelay: `${i * 0.08}s`, marginRight: "0.25em" }}>{w}</span>
        ))}</h1>
        <p className="sub hero-sub">We specialize in high-stakes environments: Nuclear Power, Gas Turbines, Data Centers, and Semiconductors.</p>
      </section>
      <div className="container">
        <div className="hero-img" />
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="tabs">
              {INDUSTRIES.map((ind, i) => (
                <button key={ind.key} className={`tab ${active === i ? "active" : ""}`} onClick={() => setActive(i)}>{ind.label}</button>
              ))}
            </div>
          </Reveal>
          <div className="tab-wrapper">
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.key} className={`tab-panel ${active === i ? "active" : ""}`}>
                <div className="tab-image" />
                <div>
                  <h2 className="h2" style={{ marginBottom: 16 }}>{ind.title}</h2>
                  <p className="lead">{ind.body}</p>
                  <div className="roles">
                    {active === i && ind.roles.map((r, ri) => (
                      <span key={r} className="role-tag" style={{ animationDelay: `${ri * 60}ms` }}>{r}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
