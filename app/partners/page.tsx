export default function Partners() {
  return (
    <div className="white-page-theme center">
      <h1>Manufacturing Partners</h1>
      <div className="partners-img">
        <img src="/images/mp.jpg" alt="Manufacturing Partners" style={{maxWidth: '800px', width: '100%'}} />
      </div>
      <p className="max-width-text" style={{margin: '20px auto'}}>
        KTC India Display LLP collaborates with leading manufacturing partners to ensure high-quality production, scalability, and reliability.
      </p>
      <ul className="centered-list">
        <li>Winsharp</li>
        <li>PG</li>
        <li>Dixon</li>
        <li>Genus</li>
        <li>Zetwerk</li>
      </ul>
    </div>
  );
}