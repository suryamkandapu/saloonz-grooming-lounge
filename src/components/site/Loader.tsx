import { useEffect, useState } from "react";

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1700);
    return () => clearTimeout(t);
  }, []);

  const name = "SALOONZ";

  return (
    <div className={`loader ${hidden ? "hidden" : ""}`}>
      <div className="loader-name">
        {name.split("").map((c, i) => (
          <span key={i} className="lc" style={{ animationDelay: `${i * 80}ms` }}>{c}</span>
        ))}
      </div>
      <div className="loader-line" />
    </div>
  );
}
