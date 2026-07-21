import MobileNav from "./MobileNav";
import QuoteForm from "./QuoteForm";

const services = [
  {
    number: "01",
    title: "Weddings",
    description:
      "Keep every important moment moving smoothly—from introductions and the first dance to a packed dance floor.",
    meta: "Ceremony • Reception • Open Dancing",
  },
  {
    number: "02",
    title: "Quinceañeras",
    description:
      "Honor the traditions, celebrate the guest of honor, and bring every generation together with the right music and energy.",
    meta: "Traditions • Family • Dance Floor",
  },
  {
    number: "03",
    title: "Birthday Parties",
    description:
      "Build a celebration around the guest of honor with flexible pacing, familiar favorites, and no-limits party energy.",
    meta: "Milestones • Family Parties • All Ages",
  },
  {
    number: "04",
    title: "Private + Corporate",
    description:
      "Create the right atmosphere for private parties, company celebrations, school functions, and other special events.",
    meta: "Private Parties • Corporate • Special Events",
  },
];

const mixes = [
  { genre: "DJ JRV Specialty", title: "Old School Favorites", length: "CLASSIC PARTY ENERGY", color: "red" },
  { genre: "For Every Celebration", title: "All-Occasion Party Mix", length: "BUILT FOR YOUR EVENT", color: "silver" },
  { genre: "Flexible Event Energy", title: "No-Limits Party Set", length: "KEEP THE NIGHT MOVING", color: "black" },
];

const faqs = [
  ["What events does DJ JRV serve?", "DJ JRV provides entertainment for weddings, quinceañeras, birthday parties, private parties, corporate events, and other celebrations in Stockton and nearby communities."],
  ["What music does DJ JRV specialize in?", "Old School music is DJ JRV's specialty. Share the age range and atmosphere you want when requesting your quote."],
  ["Do you provide dance floor lighting?", "Yes. Dance floor lighting is available as an additional service and can be discussed when planning your event."],
  ["How far do you travel?", "DJ JRV is based in Stockton, California and serves events within approximately 25 miles."],
  ["Is a deposit required?", "No deposit is currently required. Event details and payment arrangements are confirmed directly with DJ JRV."],
  ["What payment methods do you accept?", "DJ JRV accepts Apple Pay, Cash App, and cash."],
];

const bookingPhoneDisplay = "209-337-5488";
const bookingPhoneHref = "tel:+12093375488";

function Waveform({ seed = 0 }: { seed?: number }) {
  const bars = [30, 62, 44, 84, 55, 96, 39, 70, 49, 90, 58, 76, 33, 68, 92, 51, 80, 42, 65, 88, 36, 73, 54, 81];
  return (
    <span className="waveform" aria-hidden="true">
      {bars.map((height, index) => (
        <i key={index} style={{ height: `${bars[(index + seed) % bars.length]}%` }} />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DJ JRV home">
          <img className="brand-logo" src="/images/dj-jrv-logo.webp" alt="DJ JRV" />
          <span className="brand-copy"><strong>DJ JRV</strong><small>ROMERO VISION</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#top">Home</a>
          <a href="#services">Services</a>
          <a href="#mixes">Music</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#quote">Request a Quote</a>
        </nav>
        <MobileNav />
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-media" />
        <div className="hero-shade" />
        <div className="hero-content section-shell" id="main-content">
          <p className="hero-brandline">DJ JRV <span>/</span> ROMERO VISION</p>
          <p className="eyebrow"><span /> Stockton, California • Up to 25 Miles</p>
          <h1 id="hero-title">Unforgettable Music<br /><em>For Every Celebration.</em></h1>
          <p className="hero-copy">DJ JRV brings 10 years of experience, Old School favorites, and no-limits energy to weddings, quinceañeras, birthdays, private parties, corporate events, and special celebrations.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#quote">Request a Quote <span>↗</span></a>
            <a className="button button-ghost" href={bookingPhoneHref}>Check Availability <span>↗</span></a>
          </div>
          <div className="hero-proof" aria-label="DJ JRV service benefits">
            <div><strong>10 Years</strong><span>Experienced event DJ</span></div>
            <div><strong>Starting at $300</strong><span>Clear starting price</span></div>
            <div><strong>Available Daily</strong><span>Flexible event hours</span></div>
          </div>
        </div>
        <a className="scroll-cue" href="#services"><span>Scroll to explore</span><i>↓</i></a>
      </section>

      <section className="trust-strip" aria-label="Event specialties">
        <span>Weddings</span><i>◆</i><span>Quinceañeras</span><i>◆</i><span>Birthday Parties</span><i>◆</i><span>Private Events</span><i>◆</i><span>Corporate Events</span>
      </section>

      <section className="section services" id="services">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow dark"><span /> Built for every celebration</p><h2>More than music.<br /><em>A complete event.</em></h2></div>
            <p>Bring your guests together with Old School music, dance floor lighting, and an experienced DJ who keeps the energy up and the event moving.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">{service.number}</span>
                <div className="service-icon"><span>{service.title.charAt(0)}</span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <small>{service.meta}</small>
                <a href="#quote">Request a quote <span>↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-shell about-grid">
          <div className="about-collage">
            <div className="about-photo main-photo" />
            <div className="about-photo detail-photo brand-photo" />
            <div className="experience-badge"><strong>10</strong><span>Years behind<br />the music</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span /> Meet Jason Romero Vasquez</p>
            <h2>Ten years behind<br /><em>the music.</em></h2>
            <p>Jason Romero Vasquez—DJ JRV—has spent 10 years bringing music and energy to the room. His specialty is Old School music, with every playlist shaped around the event, the audience, and the atmosphere his clients want.</p>
            <p>Based in Stockton, DJ JRV serves weddings, quinceañeras, birthdays, private parties, corporate events, and other celebrations within approximately 25 miles.</p>
            <blockquote>&ldquo;DJ until you kick me out. No limits.&rdquo;</blockquote>
            <div className="about-signature"><strong>JRV</strong><span>JASON ROMERO VASQUEZ • 10 YEARS</span></div>
          </div>
        </div>
      </section>

      <section className="section mixes" id="mixes">
        <div className="section-shell">
          <div className="section-heading center-heading">
            <p className="eyebrow"><span /> Old School specialist</p>
            <h2>Your event. <em>Your soundtrack.</em></h2>
            <p>Tell DJ JRV about your guests, your important moments, and the energy you want. The music starts with his Old School specialty and is shaped for your celebration.</p>
          </div>
          <div className="mix-grid">
            {mixes.map((mix, index) => (
              <article className={`mix-card mix-${mix.color}`} key={mix.title}>
                <div className="album-art"><span>JRV</span><i>ROMERO VISION</i><b>{String(index + 1).padStart(2, "0")}</b></div>
                <div className="mix-info"><small>{mix.genre}</small><h3>{mix.title}</h3><Waveform seed={index * 5} /><div><span>{mix.length}</span><a href="#quote" aria-label={`Request a quote for ${mix.title}`}>Request a quote ↗</a></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery" aria-label="DJ JRV event gallery">
        <figure className="gallery-main">
          <img className="client-setup" src="/images/dj-jrv-setup.webp" width="1283" height="1380" loading="lazy" decoding="async" alt="DJ JRV performing with his professional DJ booth and speaker setup in Stockton" />
          <figcaption><small>Behind the Booth</small>Professional sound.<br />Real event energy.</figcaption>
        </figure>
        <figure className="gallery-side">
          <img className="client-live-setup" src="/images/dj-jrv-live-setup.webp" width="1109" height="1536" loading="lazy" decoding="async" alt="DJ JRV performing outdoors with professional speakers and colorful dance floor lighting" />
          <figcaption><small>Live &amp; Ready</small>Sound, lighting,<br />and energy.</figcaption>
        </figure>
        <a href="#quote">Your event could be next <b>↗</b></a>
      </section>

      <section className="section faq" id="faq">
        <div className="section-shell faq-grid">
          <div><p className="eyebrow dark"><span /> Good to know</p><h2>Questions,<br /><em>answered.</em></h2><p>Still wondering about something?</p><a href={bookingPhoneHref}>Call {bookingPhoneDisplay} ↗</a></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="availability" id="availability">
        <div className="section-shell availability-inner">
          <div><p className="eyebrow"><span /> Event DJ from $300</p><h2>Check your date<br /><em>by phone.</em></h2></div>
          <div><p>DJ services start at $300. Call Jason to check availability for your wedding, quinceañera, birthday, private party, corporate event, or other celebration.</p><a className="button button-secondary availability-button" href={bookingPhoneHref}>Check Availability <span>↗</span></a><small>Available Monday through Sunday • Flexible end times • No deposit currently required</small><div className="payment-list" aria-label="Accepted payment methods"><span>Apple Pay</span><span>Cash App</span><span>Cash</span></div></div>
        </div>
      </section>

      <section className="booking" id="booking">
        <div className="booking-glow" />
        <div className="section-shell booking-grid">
          <div className="booking-copy"><p className="eyebrow"><span /> Request an event quote</p><h2>Tell us about<br />your <em>event.</em></h2><p>Share the details of your celebration and DJ JRV will follow up by phone with availability and personalized pricing.</p><div className="quote-next-steps"><h3>What happens next</h3><ol><li>Jason reviews your event details.</li><li>He follows up by phone to discuss availability and pricing.</li><li>Your event details and payment plan are confirmed directly—no deposit is currently required.</li></ol></div><div className="contact-mini"><span>BOOKING PHONE</span><a href={bookingPhoneHref}>{bookingPhoneDisplay}</a></div><div className="contact-mini"><span>BOOKING EMAIL</span><a href="mailto:norcaljv209@gmail.com">norcaljv209@gmail.com</a></div><div className="contact-mini"><span>SERVICE AREA</span><p>Stockton, California • Up to 25 miles</p></div></div>
          <QuoteForm />
        </div>
      </section>

      <a className="floating-book" href="#quote"><span>Request a Quote</span><b>↗</b></a>

      <footer>
        <div className="section-shell footer-top"><a className="brand footer-brand" href="#top"><img className="brand-logo footer-logo" src="/images/dj-jrv-logo.webp" alt="DJ JRV" /><span className="brand-copy"><strong>DJ JRV</strong><small>ROMERO VISION</small></span></a><p>Old School music.<br />No-limits event energy.</p><a className="footer-email" href={bookingPhoneHref}>{bookingPhoneDisplay} ↗</a></div>
        <div className="section-shell footer-bottom"><span>© 2026 DJ JRV / Romero Vision</span><span>Dream. Focus. Create. Elevate.</span><div><a href="#gallery">Gallery</a><a href="#faq">FAQ</a><a href="#quote">Contact</a></div></div>
      </footer>

    </main>
  );
}
