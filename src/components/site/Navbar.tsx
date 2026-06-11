import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Book Now" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-links">
            {LINKS.slice(1, 3).map(l => (
              <Link key={l.to} to={l.to} className={`nav-link ${pathname === l.to ? "active" : ""}`}>{l.label}</Link>
            ))}
          </div>
          <Link to="/" className="nav-logo">Saloon<span>z</span></Link>
          <div className="nav-right">
            {LINKS.slice(3).map(l => (
              <Link key={l.to} to={l.to} className={`nav-link ${pathname === l.to ? "active" : ""}`}>{l.label}</Link>
            ))}
            <Link to="/contact" className="btn btn-solid" style={{ padding: "12px 22px", minHeight: 0 }}>Book</Link>
            <button
              className={`hamburger ${open ? "open" : ""}`}
              aria-label="Menu"
              onClick={() => setOpen(!open)}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {LINKS.map(l => (
          <Link key={l.to} to={l.to} className={`mobile-link ${pathname === l.to ? "active" : ""}`}>{l.label}</Link>
        ))}
        <Link to="/contact" className="btn btn-solid">Book An Appointment</Link>
      </div>
    </>
  );
}
