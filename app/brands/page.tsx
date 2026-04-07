export default function Brands() {
  return (
    <main className="brands-page">

      <h1 className="brands-title">Brands</h1>

      <div className="brands-container">

        {/* FPD */}
        <div className="brand-item">
          <img src="/images/fpd.jpg" alt="FPD" />
          <h2>FPD</h2>
          <a href="https://fpdvision.com/" target="_blank">
            Visit Website
          </a>
        </div>

        {/* HORION */}
        <div className="brand-item">
          <img src="/images/horion.png" alt="Horion" />
          <h2>Horion</h2>
          <a href="https://global.horion.com" target="_blank">
            Visit Website
          </a>
        </div>

        {/* ECLARA */}
        <div className="brand-item">
          <img src="/images/eclara.jpg" alt="Eclara" />
          <h2>Eclara</h2>
          <p className="coming-text">Coming Soon</p>
        </div>

      </div>

    </main>
  );
}