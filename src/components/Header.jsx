import colegioImg from '../assets/colegio.jpeg';
import insignia from '../assets/insignia.jpeg';

export function Header({ isCollapsed }) {
  return (
    <header className="header">
      <div className="header-container">
        <img
          src={colegioImg}
          alt="Banner Institucional"
        />
      </div>

      <div className="header-banner">
        <div className="header-brand">
          <img
            src={insignia}
            alt="Insignia Institucional"
            className="header-logo"
          />
        </div>
        <div className="marquee-container">
          <h1 className="marquee-text">
            BIENVENIDO HERMILIO VALDIZAN
          </h1>
        </div>
      </div>
    </header>
  );
}
