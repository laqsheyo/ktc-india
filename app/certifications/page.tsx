export default function Certifications() {
  return (
    <main className="cert-page">

      <h1 className="cert-title">Certifications</h1>

      {/* ISO */}
      <div className="cert-iso">
        <img src="/images/iso.png" alt="ISO Certification" />
      </div>

      {/* OTHER CERTIFICATIONS */}
      <div className="cert-grid">
        <img src="/images/gst.png" alt="GST" />
        <img src="/images/iec.png" alt="IEC" />
        <img src="/images/msme.png" alt="MSME" />
        <img src="/images/lmpc.png" alt="LMPC" />
      </div>

      {/* TEXT */}
      <p className="cert-text">
        KTC India Display LLP operates with ISO certification and all major
        government registrations including GST, IEC (Import Export Code),
        MSME, and LMPC ensuring reliability, compliance, and trust.
      </p>

    </main>
  );
}