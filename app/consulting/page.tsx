export default function ConsultingAssignments() {
  return (
    <div className="white-page-theme center">
      <h1 className="consulting-title">Consulting Assignments</h1>
      <div className="consulting-image">
        <img src="/images/co.jpg" alt="Consulting" style={{maxWidth: '800px', width: '100%'}} />
      </div>
      <div className="max-width-text" style={{margin: '20px auto', textAlign: 'left', display: 'inline-block'}}>
        <p>KTC India has successfully handled multiple consulting assignments:</p>
        <ul className="consulting-list">
          <li><strong>INTEX:</strong> Product Development</li>
          <li><strong>SHENZHEN KTC:</strong> Business Development</li>
          <li><strong>FLYBALL China:</strong> Brand Launch</li>
          <li><strong>PGEL:</strong> Strategic Alignments</li>
          <li><strong>MICROMAX:</strong> Audio Sourcing</li>
          <li><strong>NEOTERIC:</strong> Business Development</li>
        </ul>
      </div>
    </div>
  );
}