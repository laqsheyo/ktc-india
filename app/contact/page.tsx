export default function Contact() {
  return (
    <main className="section">

      <h1>KTC India Display LLP</h1>

      <p>
        707-710 Paras Trinity, Sector 63, Gurugram<br />
        Phone: <a href="tel:+917683005899">+91 76830 05899</a>
      </p>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps?q=707-710%20Paras%20Trinity%20Sector%2063%20Gurugram&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
        ></iframe>
      </div>

    </main>
  );
}