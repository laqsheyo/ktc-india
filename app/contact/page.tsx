export default function Contact() {
  return (
    <main className="section">

      <h1>KTC India Display LLP</h1>

      <p>
        707-710 Paras Trinity, Maidawas Rd, Sector 63,<br />
        Gurugram, Haryana 122098<br />
        Phone: <a href="tel:+917683005899">+91 76830 05899</a>
      </p>

      {/* GOOGLE MAP */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps?q=707-710%20Paras%20Trinity%20Sector%2063%20Gurugram&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

      {/* DIRECTIONS BUTTON */}
      <a
        href="https://maps.app.goo.gl/UXbdc5HDw2rSrYeg8?g_st=ac"
        target="_blank"
        rel="noopener noreferrer"
        className="directions-btn"
      >
        Get Directions
      </a>

      {/* ✅ NEW HEADING (IMPORTANT FIX) */}
      <div className="contact-heading">
        <h2>Send an Enquiry or Feedback</h2>
        <p>We will get back to you as soon as possible.</p>
      </div>

      {/* CONTACT FORM */}
      <form
        action="https://formsubmit.co/laqsheyo@gmail.com"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Your Email" required />

        <textarea name="message" placeholder="Your Message" required />

        <button type="submit">Send Message</button>
      </form>

    </main>
  );
}