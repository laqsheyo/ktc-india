export default function Contact() {
  return (
    <div className="white-page-theme">
      <h1>Contact Us</h1>
      <p>707-710 Paras Trinity, Sector 63, Gurugram</p>
      <p>Phone: <a href="tel:+917683005899">+91 76830 05899</a></p>
      
      <form action="https://formsubmit.co/laqsheyo@gmail.com" method="POST" className="contact-form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows={4} required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
}