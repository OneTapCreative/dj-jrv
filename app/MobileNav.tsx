"use client";

import { useState } from "react";

const links = [
  ["Home", "#top"],
  ["Services", "#services"],
  ["Music", "#mixes"],
  ["Gallery", "#gallery"],
  ["About", "#about"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`mobile-nav ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span /><span /><span />
      </button>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="mobile-quote-link" href="#quote" onClick={() => setOpen(false)}>Request a Quote</a>
        </nav>
      )}
    </div>
  );
}
