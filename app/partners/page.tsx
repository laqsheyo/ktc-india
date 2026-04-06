export default function Partners() {
  return (
    <main className="partners-page">

      <div className="partners-grid">

        {/* LEFT COLUMN */}
        <div className="partner-box">
          <img src="/images/winsharp.png" alt="Winsharp" />
        </div>

        <div className="partner-box">
          <img src="/images/genus.png" alt="Genus" />
        </div>

        <div className="partner-box">
          <img src="/images/zetwerk.png" alt="Zetwerk" />
        </div>

        {/* CENTER TEXT */}
        <div className="partner-center">
          <h1>MANUFACTURING<br />PARTNERS</h1>
        </div>

        {/* RIGHT COLUMN */}
        <div className="partner-box">
          <img src="/images/pg.png" alt="PG" />
        </div>

        <div className="partner-box">
          <img src="/images/dixon.png" alt="Dixon" />
        </div>

      </div>

    </main>
  );
}