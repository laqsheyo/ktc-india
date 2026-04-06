export default function Contact() {
  return (
    <div className="white-page-theme center">
      <h1>Contact Us</h1>
      <p className="address">
        707-710 Paras Trinity, Maidawas Rd, Sector 63, Gurugram, Haryana 122098<br />
        Phone: <a href="tel:+917683005899" style={{color: 'blue'}}>+91 76830 05899</a>
      </p>

      <div className="map-container" style={{margin: '20px auto', maxWidth: '800px'}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.324546552945!2d77.0652!3d28.4032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226f3aaaaaaf%3A0x6735e2363167f5b!2sParas%20Trinity!5e0!3m2!1sen!2sin!4v1712400000000"
          width="100%" height="350" style={{ border: 0 }} loading="lazy"
        ></iframe>
      </div>

      <form action="https://formsubmit.co/laqsheyo@gmail.com" method="POST" className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required /><br/>
        <input type="email" name="email" placeholder="Your Email" required /><br/>
        <textarea name="message" placeholder="Your Message" required></textarea><br/>
        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  );
}