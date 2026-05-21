import presentacionIcon from '../assets/presentacion.jpeg';
import historiaIcon from '../assets/historia.jpeg';
import orientacionIcon from '../assets/orientacion.jpeg';
import administradorIcon from '../assets/administrador.jpeg';
import galeriaIcon from '../assets/galeria.jpeg';
import actividadesIcon from '../assets/actividades.jpeg';
import notasIcon from '../assets/notas.jpeg';
import articulosIcon from '../assets/articulos.jpeg';
import talleresIcon from '../assets/talleres.jpeg';





export function Sidebar({ activeMenu, onMenuChange }) {
  const menuItems = [
    { id: 'presentacion', label: 'Presentación', icon: presentacionIcon, isCustom: true },
    { id: 'historia', label: 'Historia', icon: historiaIcon, isCustom: true },
    { id: 'vision', label: 'Visión y Misión', icon: orientacionIcon, isCustom: true },
    { id: 'personal', label: 'Personal', icon: administradorIcon, isCustom: true },
    { id: 'galeria', label: 'Galería', icon: galeriaIcon, isCustom: true },
    { id: 'actividades', label: 'Actividades', icon: actividadesIcon, isCustom: true },
    { id: 'boleta', label: 'Boleta de Notas', icon: notasIcon, isCustom: true },
    { id: 'A.I.P', label: 'A.I.P', icon: articulosIcon, isCustom: true },
    { id: 'talleres', label: 'Talleres', icon: talleresIcon, isCustom: true },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>MENÚ PRINCIPAL</h2>  
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
                onClick={() => onMenuChange(item.id)}
              >
                <span className="menu-icon">
                  {item.isCustom ? (
                    <img 
                      src={item.icon} 
                      alt="" 
                      style={{ width: '22px', height: '22px', objectFit: 'cover', borderRadius: '4px' }} 
                    />
                  ) : (
                    item.icon
                  )}
                </span>
                <span className="menu-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
