export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <li>📍 Jr. Hermilio Valdizán - Huánuco</li>
            <li>📞 Central: (062) 123456</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#">Portal MINEDU</a></li>
            <li><a href="#">SIAGIE</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} I.E.I. Hermilio Valdizán - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}