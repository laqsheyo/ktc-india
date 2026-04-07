"use client";

export default function AboutUs() {
  return (
    <main>

      {/* TOP BANNER IMAGE */}
      <div className="about-hero">
        <img src="/images/abo.jpg" alt="About KTC India" />
      </div>

      {/* INTRO */}
      <section className="section">
        <h1>Driving Global Sourcing Excellence</h1>

        <p>
          KTC India Display LLP enables businesses to scale with efficient sourcing,
          innovative product development, and reliable execution.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section className="section">
        <h2>Our Capabilities</h2>

        <ul className="about-list">
          <li>Global Sourcing Network</li>
          <li>Product Development and Engineering Support</li>
          <li>Customer Service and Relationship Management</li>
          <li>Marketing and Brand Enablement</li>
          <li>Creative and Packaging Design</li>
        </ul>
      </section>

      {/* APPROACH */}
      <section className="section">
        <h2>Our Approach</h2>

        <ul className="about-list">
          <li>Understand client requirements deeply</li>
          <li>Identify best-fit suppliers and solutions</li>
          <li>Ensure quality, compliance, and timelines</li>
          <li>Deliver consistent value and long-term partnerships</li>
        </ul>
      </section>

      {/* VISION */}
      <section className="section">
        <h2>Our Vision</h2>

        <p>
          To be a trusted partner for global sourcing and product solutions in
          Consumer Electronics and IT.
        </p>
      </section>

      {/* EXISTING CONTENT (KEPT CLEAN) */}
      <section className="section">
        <h2>Leadership</h2>

        <p>
          The company is led by experienced professionals. Ajay Arora brings over
          35 years of expertise across consumer electronics, IT, and automotive
          sectors, while Laqshay Arora contributes strong experience in operations
          and marketing.
        </p>

        <img src="/images/3.jpg" />
      </section>

      <section className="section">
        <h2>Industry Experience</h2>

        <p>
          KTC India has worked with leading brands such as Onida, AMKETTE, INTEX,
          BEETEL, PGEL, MATATA, and ELISTA.
        </p>

        <img src="/images/4.jpg" />
      </section>

    </main>
  );
}