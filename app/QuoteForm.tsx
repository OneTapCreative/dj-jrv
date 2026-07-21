"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xwvgobww", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Quote request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="booking-form"
      id="quote"
      onSubmit={handleSubmit}
      aria-labelledby="quote-form-title"
      aria-describedby="quote-form-intro quote-form-note"
    >
      <input type="hidden" name="_subject" value="Request for Quote — DJ JRV Website" />
      <input type="hidden" name="Website" value="DJ JRV / Romero Vision" />
      <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <h3 id="quote-form-title">Request a Personalized Quote</h3>
      <p id="quote-form-intro">Share a few details so DJ JRV can understand your event and prepare the right options. Services start at $300.</p>
      <p className="required-note"><span aria-hidden="true">*</span> Required fields</p>

      <fieldset>
        <legend>Contact information</legend>
        <div className="field-row">
          <label>Your name <span className="required">Required</span><input name="Full Name" autoComplete="name" required placeholder="First and last name" /></label>
          <label>Phone number <span className="required">Required</span><input type="tel" name="Phone Number" autoComplete="tel" required placeholder="(209) 555-0123" /></label>
        </div>
        <div className="field-row">
          <label>Email address<input type="email" name="email" autoComplete="email" placeholder="you@email.com" /></label>
          <label>Preferred contact method<select name="Preferred Contact Method" defaultValue="Phone call"><option>Phone call</option><option>Text message</option><option>Email</option></select></label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Event details</legend>
        <div className="field-row">
          <label>Event date<input type="date" name="Event Date" /></label>
          <label>Event type <span className="required">Required</span><select name="Event Type" defaultValue="" required><option value="" disabled>Select event type</option><option>Wedding</option><option>Quinceañera</option><option>Birthday Party</option><option>Private Party</option><option>Corporate Event</option><option>School or Community Event</option><option>Other Celebration</option></select></label>
        </div>
        <div className="field-row">
          <label>Guest count<input type="number" name="Estimated Guest Count" min="1" inputMode="numeric" placeholder="Approximate number" /></label>
          <label>Venue or city<input name="Venue or City" autoComplete="street-address" placeholder="Venue name or event city" /></label>
        </div>
      </fieldset>

      <label>Tell us about your event<textarea name="Event Details" rows={5} placeholder="Important moments, guest age range, music preferences, lighting needs, hours, and anything else we should know..." /></label>

      <button className="button button-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending Request..." : "Request My Quote"} <span>↗</span>
      </button>

      {status === "success" && (
        <p className="form-status form-status-success" role="status" aria-live="polite">
          <strong>Quote request received.</strong> Thank you for contacting DJ JRV / Romero Vision. Jason will review your event details and follow up using the contact information you provided.
        </p>
      )}

      {status === "error" && (
        <p className="form-status form-status-error" role="alert">
          <strong>We couldn’t send your request.</strong> Please try again, call <a href="tel:+12093375488">209-337-5488</a>, or email <a href="mailto:norcaljv209@gmail.com">norcaljv209@gmail.com</a>.
        </p>
      )}

      <p className="form-confirmation" id="quote-form-note"><strong>What happens after you submit:</strong> Your request is sent directly to DJ JRV. Jason will review the details and follow up by phone, text, or email based on your preference.</p>
    </form>
  );
}
