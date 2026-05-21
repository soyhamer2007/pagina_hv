export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Información</h4>
          <ul>
            <li><a href="#contacto">Contacto</a></li> {/* Mantener este como placeholder si no hay un link real */}
            <li><a href="https://maps.app.goo.gl/BmMmyovWDq3wCbaL9" target="_blank" rel="noopener noreferrer">Ubicación</a></li>
            <li><a href="#telefono">Teléfono</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#privacidad">Privacidad</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61575205543666" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
