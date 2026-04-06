export default function ConsultingAssignments() {
  return (
    <main className="consulting-page-new">

      <h1 className="consulting-title">Consulting Assignments</h1>

      {/* IMAGE */}
      <div className="consulting-image">
        <img src="/images/co.jpg" alt="Consulting" />
      </div>

      {/* TEXT CONTENT */}
      <div className="consulting-content">

        <p>
          KTC India has successfully handled multiple consulting assignments across
          consumer electronics, IT, and related industries.
        </p>

        <ul>
          <li>
            <strong>INTEX:</strong> Consumer Electronics, IT & Mobile Accessories Product Development
          </li>

          <li>
            <strong>SHENZHEN KTC:</strong> Product Showroom, Business Development, After Sales
          </li>

          <li>
            <strong>FLYBALL China:</strong> Office Opening, Brand Launch & Distribution
          </li>

          <li>
            <strong>PGEL:</strong> TV Sourcing & Strategic Alignments
          </li>

          <li>
            <strong>MICROMAX:</strong> Audio Product Sourcing
          </li>

          <li>
            <strong>NEOTERIC:</strong> Audio Business Development
          </li>
        </ul>

      </div>

    </main>
  );
}