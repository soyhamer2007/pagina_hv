import { useState, useEffect } from 'react';
import caratulaImg from '../assets/caratula.jpeg';
import subdirectorCesarImg from '../assets/subdirector_Cesar.jpeg';
import subdirectorPlacidoImg from '../assets/subdirector_Placido.jpeg';
import corte1Img from '../assets/corte1.jpeg';
import corte2Img from '../assets/corte2.jpeg';
import corte3Img from '../assets/corte3.jpeg';
import corte4Img from '../assets/corte4.jpeg';
import diseño1Img from '../assets/diseño1.jpeg';
import diseño2Img from '../assets/diseño2.jpeg';
import diseño3Img from '../assets/diseño3.jpeg';
import diseño4Img from '../assets/diseño4.jpeg';
import electricidad1Img from '../assets/electricidad1.jpeg';
import electricidad2Img from '../assets/electricidad2.jpeg'; // Nueva imagen para Electricidad
import electricidad3Img from '../assets/electricidad3.jpeg';
import aipImagenMat from '../assets/AIP_imagen.jpeg';
import electronica1Img from '../assets/electronica1.jpeg';
import electronica2Img from '../assets/electronica2.jpeg';
import electronica3Img from '../assets/electronica3.jpeg';
import electronica4Img from '../assets/electronica4.jpeg';
import electronica5Img from '../assets/electronica5.jpeg';
import alimentos1Img from '../assets/alimentos1.jpeg';
import alimentos2Img from '../assets/alimentos2.jpeg';
import alimentos3Img from '../assets/alimentos3.jpeg';
import alimentos4Img from '../assets/alimentos4.jpeg';
import ebanisteria1Img from '../assets/ebanisteria1.jpeg';
import ebanisteria2Img from '../assets/ebanisteria2.jpeg';
import ebanisteria3Img from '../assets/ebanisteria3.jpeg';
import ebanisteria4Img from '../assets/ebanisteria4.jpeg';
import deporte1Img from '../assets/deporte1.jpeg';
import deporte2Img from '../assets/deporte2.jpeg';
import deporte3Img from '../assets/deporte3.jpeg';
import deporte4Img from '../assets/deporte4.jpeg';
import deporte5Img from '../assets/deporte5.jpeg';
import deporte6Img from '../assets/deporte6.jpeg';
import deporte7Img from '../assets/deporte7.jpeg';
import deporte8Img from '../assets/deporte8.jpeg';
import deporte9Img from '../assets/deporte9.jpeg';
import deporte10Img from '../assets/deporte10.jpeg';
import madre1Img from '../assets/madre1.jpeg';
import madre2Img from '../assets/madre2.jpeg';
import madre3Img from '../assets/madre3.jpeg';
import madre4Img from '../assets/madre4.jpeg';
import madre5Img from '../assets/madre5.jpeg';
import confeccion1Img from '../assets/confeccion1.jpeg';
// import videoDeporte from '../assets/video_deporte.mp4';

export function MainContent({ activeMenu }) {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null); // Para la sección 'talleres'
  const [selectedAIPWorkshop, setSelectedAIPWorkshop] = useState(null); // Para la sección 'A.I.P'
  const [activeActivity, setActiveActivity] = useState(null); // Para el acordeón de actividades

  const voleyImages = [
    deporte1Img, deporte2Img, deporte3Img, deporte4Img,
    deporte5Img, deporte6Img, deporte7Img, deporte8Img
  ];
  const futbolImages = [deporte9Img, deporte10Img];
  const madreImages = [madre1Img, madre2Img, madre3Img, madre4Img, madre5Img];

  useEffect(() => {
    setSelectedWorkshop(null);
    setSelectedAIPWorkshop(null);
  }, [activeMenu]);

  // Función para rotar los efectos según el índice de la imagen
  const getImageEffectClass = (index) => {
    const effects = ['img-effect-blur', '', 'img-effect-saturated', 'img-effect-grayscaled', 'img-effect-sepia'];
    return effects[index % effects.length];
  };

  const aipWorkshopImages = {
    'MATEMATICA': [aipImagenMat, null, null], // Assuming only one image for MATEMATICA for now
    'CORTE Y CONFECCION': [corte1Img, corte2Img, corte3Img, corte4Img],
    'ELECTRICIDAD': [electricidad1Img, null, null],
    'DISEÑO ARQUITECTONICO': [diseño1Img, diseño2Img, diseño3Img, diseño4Img],
    'ELECTRONICA': [electronica1Img, electronica2Img, electronica3Img, electronica4Img, electronica5Img],
    'INDUSTRIAS ALIMENTARIAS': [alimentos1Img, alimentos2Img, alimentos3Img, alimentos4Img],
    'EBANISTERIA': [ebanisteria1Img, ebanisteria2Img, ebanisteria3Img, ebanisteria4Img],
  };

  // Imágenes específicas para la sección A.I.P
  const aipImages = {
    ...aipWorkshopImages,
    'ELECTRICIDAD': [electricidad1Img, electricidad2Img, electricidad3Img],
    'CORTE Y CONFECCION': [confeccion1Img],
  };

  // Definimos las variables que faltaban para que las galerías funcionen
  const currentAIPImages = selectedAIPWorkshop ? (aipImages[selectedAIPWorkshop] || [null, null, null, null]) : [null, null, null, null];
  const currentWorkshopImages = selectedWorkshop ? (aipWorkshopImages[selectedWorkshop.toUpperCase()] || [null, null, null, null]) : [null, null, null, null];

  const sections = {
    presentacion: {
      title: 'Bienvenida institucional',
      subtitle: 'Educación con propósito y compromiso social',
      content: [ // Cambiado de 'paragraphs' a 'content' para mayor flexibilidad
        {
          type: 'paragraph',
          text: 'Bienvenidos a la Institución Educativa Industrial “Hermilio Valdizán”. Nos consolidamos como un referente de excelencia académica en la región Huánuco y a nivel nacional, formando generaciones con integridad y visión de futuro. Asumimos con orgullo la responsabilidad de liderar el aprendizaje de nuestra familia Valdizana, contando con un equipo docente de vanguardia, capacitado continuamente en el uso de Inteligencia Artificial (IA) y herramientas TIC. Nuestros profesionales están comprometidos con la formación humanista, el liderazgo y el cultivo de valores en cada uno de nuestros estudiantes.'
        },
        {
          type: 'paragraph',
          text: 'El colegio destaca por su Modelo de Formación Técnica, donde los estudiantes de secundaria acceden a especialidades prácticas que los preparan para el futuro, tales como:'
        },
        {
          type: 'list',
          items: [
            '**Mecánica Automotriz y de Producción:** Con enfoque en proyectos base y mantenimiento.',
            '**Electricidad:** Aprendizaje sobre instalaciones domésticas y complejas.',
            '**Confección Textil:** Manejo de maquinaria industrial y corte.',
            '**Dibujo Técnico:** Lectura y elaboración de planos.',
            '**Carpintería y Ebanistería:** Los estudiantes aprenden el diseño y fabricación de muebles, así como el uso de herramientas eléctricas para el acabado de madera.',
            '**Electrónica:** Enfocado en el mantenimiento de dispositivos electrónicos, circuitos y sistemas de comunicación básica.',
            '**Cuero y Calzado:** Capacitación en el diseño y confección de productos derivados del cuero, como zapatos y accesorios.',
            '**Industrias Alimentarias:** Este taller se enfoca en la transformación de materias primas regionales en productos procesados.',
            '**Computación e Informática:** Este taller ha cobrado gran relevancia con la modernización del colegio, enfocándose en herramientas digitales actuales.'
          ]
        },
        {
          type: 'heading', // Nuevo tipo para un subtítulo dentro de la tarjeta
          text: 'NUESTRO SISTEMA EDUCATIVO'
        },
        {
          type: 'paragraph',
          text: 'Desarrollamos un sistema educativo sólido, diseñado para formar jóvenes con principios, valores y liderazgo firmes, de acuerdo a las exigencias de nuestra sociedad actual. Ser una mejor persona y profesionalmente exitosa es algo que se construye a partir del desarrollo de ciertas cualidades y características en un estudiante. Por ello, trabajamos en la formación integral de nuestros estudiantes para ser ciudadanos responsables y líderes éticos en el mundo.'
        }
      ],
    },
    historia: {
      title: 'Reseña Histórica',
      subtitle: 'Trayectoria y legado educativo',
      content: [
        {
          type: 'paragraph',
          text: 'Nuestra I. E. Industrial tiene sus orígenes en el Colegio Nacional Leoncio Prado, cuando por iniciativa del Dr. Juan Olivera Cortéz crea la sección anexa: Escuela de Artes y Oficios, el 10 de Julio de 1944, posteriormente por Resolución Suprema N° 1040 de fecha 15 de Mayo de 1946 dispone crear el Colegio Industrial N° 19 con sede en la ciudad de Huánuco.'
        },
        {
          type: 'paragraph',
          text: 'El primer e ilustre Director Arsenio Mendoza Flor, realiza las gestiones administrativas correspondientes, para lograr el funcionamiento de nuevas especialidades, logrando la autorización para 5 especialidades. Mecánica, Electricidad, Automotores, Carpintería y Construcción: así mismo gestiona el terreno donde actualmente se encuentra nuestra prestigiosa Institución Educativa.'
        },
        {
          type: 'paragraph',
          text: 'La Institución Educativa Industrial “Hermilio Valdizán”, brinda formación técnica a más de 1400 estudiantes del Nivel Secundaria, divididos en dos turnos: mañana y tarde, pertenece al Modelo de Servicio Educativo de Secundaria con Formación Técnica, donde laboran 70 docentes, de los cuales 24 docentes imparten 10 especialidades técnicas en el área de Educación para el Trabajo.'
        },
        {
          type: 'heading',
          text: 'CARACTERÍSTICAS DE NUESTRA INSTITUCIÓN'
        },
        {
          type: 'list',
          items: [
            'Brinda formación que permite transitar a niveles formativos de CETPRO, IES, IEST, EEST, así como al mundo del trabajo.',
            'Desarrolla competencias blandas para la empleabilidad y el autoempleo en el marco que demanda el siglo XXI.',
            'Certificación técnica en una de las 10 especialidades.',
            'Brinda una formación técnica que responde a las demandas de desarrollo económico-productivo y social territorial.',
            'Desarrolla competencias científicas, tecnológicas, artísticas y deportivas.',
            'Desarrolla una formación que promueve la creatividad, la innovación y el espíritu emprendedor.'
          ]
        },
        {
          type: 'paragraph',
          text: 'En la actualidad, se tiene una infraestructura nueva, tecnológicamente moderna con capacidad de 2000 estudiantes, con 26 aulas, talleres, laboratorios, aulas de innovación, biblioteca, etc., que están implementados con última tecnología, contaremos con 10 especialidades técnicas en el área de Educación para el Trabajo: Carpintería y Ebanistería, Confección textil, Cuero y calzado, Dibujo técnico, Electricidad, Electrónica, Mecánica automotriz, Mecánica de producción, Computación e informática y Panadería y pastelería, con el pleno compromiso del personal Directivo, Docente y Administrativo de proporcionar a nuestros estudiantes las herramientas necesarias para asegurar el éxito en el futuro, bajo la acertada dirección del Dr. Percy Camara Acero, los subdirectores; Mg. Plácido Alvarado Vicente, Lic. César Augusto Palomino Falcon, Lic. Anival Alomía Lucero.'
        }
      ]
    },
    vision: {
      title: 'Visión y Misión',
      subtitle: 'Una propuesta educativa con impacto',
      cards: [
        {
          label: 'MISIÓN',
          text: 'Somos una IE, con secundaria con formación técnica, que promueve el desarrollo y la formación integral de los estudiantes, basada en la práctica de valores para la formación humanista, ambiental, científica y tecnológica, que responda a las exigencias del mercado laboral y construir una sociedad solidaria para la convivencia democrática.',
        },
        {
          label: 'VISIÓN',
          text: 'Al 2027 ser una institución líder, reconocido por la educación en valores, con estándares de calidad educativa: para la formación humanística, ambiental, científica y tecnológica, que responda a las necesidades del mercado laboral del ámbito local, regional y nacional.',
        },
      ],
    },
    personal: {
      title: 'Personal',
      subtitle: 'Equipo comprometido con la educación',
      content: [
        {
          type: 'paragraph',
          text: 'Nuestro equipo directivo y docente combina experiencia y creatividad para guiar el desarrollo integral de los estudiantes. Trabajamos junto con familias y comunidades para fortalecer el aprendizaje y la formación en valores.'
        },
        {
          type: 'heading',
          text: 'EQUIPO DIRECTIVO'
        },
        {
          type: 'team',
          members: [
            { name: 'Camara Acero, Percy', role: 'Director' },
            { name: 'Alvarado Vicente, Plácido', role: 'Subdirector Administrativo', image: subdirectorPlacidoImg },
            { name: 'Alomía Lucero, Anival', role: 'Subdirector de Formación General' },
            { name: 'Palomino Falcon, Cesar', role: 'Subdirector de Área Técnica', image: subdirectorCesarImg }
          ]
        }
      ]
    },
    'actividades y galeria': {
      title: 'Actividades y Galería',
      subtitle: '',
      paragraphs: [],
    },
    boleta: {
      title: 'Boleta de Notas',
      subtitle: 'Resultados académicos accesibles',
      paragraphs: ['Consulta el avance académico de los estudiantes y los estándares de rendimiento en cada ciclo escolar.'],
    },
    'A.I.P': {
      title: 'A.I.P',
      subtitle: '',
      content: [
        {
          type: 'buttons',
          items: [
            'ELECTRICIDAD', 'MATEMATICA', 
            'MECANICA PRODUCCION', 'CORTE Y CONFECCION', 
            'MECANICA AUTOMOTRIZ', 'INGLES'
          ]
        }
      ]
    },
    talleres: {
      title: 'Talleres',
      subtitle: 'Espacios prácticos para aprender y crear',
      workshops: [
        'electronica',
        'electricidad',
        'industrias alimentarias',
        'mecanica automotriz',
        'mecanica de produccion',
        'computacion',
        'corte y confeccion',
        'diseño arquitectonico',
        'cuero y calzado',
        'ebanisteria',
      ],
    },
    creditos: {
      title: 'Créditos',
      subtitle: 'Reconocimiento a nuestra comunidad',
      paragraphs: ['Agradecemos a docentes, estudiantes y familias que hacen posible nuestro proyecto educativo.'],
    },
  }

  const section = sections[activeMenu] || sections.presentacion

  return (
    <main className="main-content">
      {selectedAIPWorkshop ? (
        <div className="aip-detail-overlay">
          <div className="aip-detail-content">
            <button className="exit-aip-button" onClick={() => setSelectedAIPWorkshop(null)}>
              Salir
            </button>
            <h2>{selectedAIPWorkshop.toUpperCase()}</h2>
            <div className="detail-separator" style={{ width: '100px', height: '5px', background: 'var(--accent-color)', margin: '0 auto 20px' }}></div>
            <div className="aip-detail-images-grid">
              {currentAIPImages.map((img, index) => (
                <div className="aip-image-card" key={index}>
                  {img ? (
                    <>
                      {selectedAIPWorkshop === 'ELECTRICIDAD' && (
                        <div className="aip-image-label">
                          <span className="aip-image-degree">{index === 0 ? '2°' : '1°'}</span>
                          <span className="aip-image-secundaria">secundaria</span>
                        </div>
                      )}
                      {selectedAIPWorkshop === 'CORTE Y CONFECCION' && (
                        <div className="aip-image-label">
                          <span className="aip-image-degree">5°</span>
                          <span className="aip-image-secundaria">secundaria</span>
                        </div>
                      )}
                      <img 
                        src={img} 
                        alt={`Aula de Innovación - ${selectedAIPWorkshop} ${index + 1}`} 
                        className={getImageEffectClass(index)}
                      />
                    </>
                  ) : (
                    <span>Espacio para Imagen {index + 1}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : selectedWorkshop ? ( // Existente: Si hay un taller normal seleccionado, muestra su overlay
        <div className="aip-detail-overlay">
          <div className="aip-detail-content">
            <button className="exit-aip-button" onClick={() => setSelectedWorkshop(null)}>
              Salir
            </button>
            <h2>{selectedWorkshop.toUpperCase()}</h2>
            <div className="detail-separator" style={{ width: '100px', height: '5px', background: 'var(--accent-color)', margin: '0 auto 20px' }}></div>
            
            <div className="aip-detail-images-grid">
              {currentWorkshopImages.map((img, index) => (
                <div className="aip-image-card" key={index}>
                  {img ? (
                    <img 
                      src={img} 
                      alt={`Taller - ${selectedWorkshop} ${index + 1}`} 
                      className={getImageEffectClass(index)}
                    />
                  ) : (
                    <span>Espacio para Imagen {index + 1}</span>
                  )}
                </div>
              ))}
            </div>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>Información detallada sobre el taller de {selectedWorkshop}.</p>
          </div>
        </div>
      ) : (
        <>
      <div className={`content-header ${activeMenu === 'talleres' ? 'talleres-header-custom' : ''} ${activeMenu === 'vision' ? 'vision-header-custom' : ''}`}>
        {activeMenu === 'talleres' ? (
          <div className="talleres-animation-container">
            <figure>
              <h1>TALLERES</h1>
              <h1>TALLERES</h1>
              <h1>TALLERES</h1>
              <h1>TALLERES</h1>
              <h1>TALLERES</h1>
              <h1>TALLERES</h1>
              <h1>TALLERES</h1>
              <h1>TALLERES</h1>
              <h1>TALLERES</h1>
              <h1>TALLERES</h1>
            </figure>
            <p className="section-subtitle workshops-subtitle-extra">{section.subtitle}</p>
          </div>
        ) : (
          <>
            <h2>{section.title}</h2>
            <p className="section-subtitle">{section.subtitle}</p>
          </>
        )}
      </div>

      <div className="content-body">
        <div className="content-text">
          {section.content ? (<>
            {section.content.map((item, index) => {
            if (item.type === 'paragraph') {
              return <p key={index}>{item.text}</p>;
            } else if (item.type === 'list') {
              return (
                <ul key={index} style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left', marginBottom: '15px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>
                  {item.items.map((listItem, liIndex) => (
                    <li key={liIndex} dangerouslySetInnerHTML={{ __html: listItem }}></li>
                  ))}
                </ul>
              );
            } else if (item.type === 'heading') {
              return <h3 key={index} style={{ marginTop: '25px', marginBottom: '15px', color: 'var(--primary-color)', fontSize: '1.4rem', fontWeight: '800', textAlign: 'center' }}>{item.text}</h3>;
            } else if (item.type === 'team') {
              return (
                <div key={index} className="team-grid">
                  {item.members.map((member, mIndex) => (
                    <div key={mIndex} className="team-member">
                      <div className="member-photo-container">
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="member-photo" />
                        ) : (
                          <div className="photo-placeholder">
                            <span>Foto</span>
                          </div>
                        )}
                      </div>
                      <div className="member-info">
                        <span className="member-name">{member.name}</span>
                        <p className="member-role">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            } else if (item.type === 'image') {
                    return (
                      <div key={index} style={{ textAlign: 'center', margin: '20px 0' }}>
                        <img 
                          src={item.src} 
                          alt={item.alt} 
                          className={`content-image-dynamic ${getImageEffectClass(index)}`}
                          style={{ 
                            maxWidth: '100%', 
                            maxHeight: '450px', 
                            borderRadius: '12px', 
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            display: 'inline-block'
                          }} 
                        />
                      </div>
                    );
                  } else if (item.type === 'buttons') {
                    return (
                      <div key={index} className="workshops-buttons-grid" style={{ marginTop: '10px', paddingBottom: '20px' }}>
                        {item.items.map((btnLabel, btnIndex) => (
                          <div 
                            key={btnIndex} 
                            className="holographic-card" 
                            style={{ height: '80px', width: '165px' }}
                            onClick={() => setSelectedAIPWorkshop(btnLabel)} // Cambiado para usar el nuevo estado
                          >
                            <h2 style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>{btnLabel}</h2>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null; // En caso de un tipo desconocido
                })}

            {activeMenu === 'presentacion' && (
              <div className="hymn-section">
                <h2 className="hymn-title">HIMNO DEL COLEGIO</h2>
                <img 
                  src={caratulaImg} 
                  alt="Himno del Colegio" 
                  className={`hymn-image ${getImageEffectClass(0)}`} 
                />
              </div>
            )}
            </>
          ) : (
            section.paragraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          )}

          {section.notes && (
            <ul className="section-notes">
              {section.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          )}

          {section.cards && (
            <div className="vision-grid">
              {section.cards.map((card) => (
                <article className="vision-card" key={card.label}>
                  <h3>{card.label}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          )}
   
          {section.workshops && (
            <div className="workshops-buttons-grid">
              {section.workshops.map((workshop) => (
                <div className="holographic-card" key={workshop} onClick={() => setSelectedWorkshop(workshop)}>
                  <h2>{workshop.toUpperCase()}</h2>
                </div>
              ))}
            </div>
          )}
        </div>

        {activeMenu === 'actividades y galeria' && (
          <div className="activities-container">
            {/* BOTÓN 1: DIA DEL DEPORTE */}
            <div className="activity-item">
              <button 
                className={`activity-button ${activeActivity === 'deporte' ? 'active' : ''}`}
                onClick={() => setActiveActivity(activeActivity === 'deporte' ? null : 'deporte')}
              >
                1. DIA DEL DEPORTE
                <span>{activeActivity === 'deporte' ? '▲' : '▼'}</span>
              </button>
              
              {activeActivity === 'deporte' && (
                <div className="activity-content">
                  <h3 className="activity-sub-title">1. Practicando el voley</h3>
                  <div className="aip-detail-images-grid">
                    {voleyImages.map((img, index) => (
                      <div className="aip-image-card" key={index}>
                        <img 
                          src={img} 
                          alt={`Voley - Imagen ${index + 1}`} 
                          className={getImageEffectClass(index)}
                        />
                      </div>
                    ))}
                  </div>

                  <h3 className="activity-sub-title">2. Practicando el futbol</h3>
                  <div className="aip-detail-images-grid">
                    {futbolImages.map((img, index) => (
                      <div className="aip-image-card" key={index}>
                        <img 
                          src={img} 
                          alt={`Futbol - Imagen ${index + 1}`} 
                          className={getImageEffectClass(index)}
                        />
                      </div>
                    ))}
                    </div>
                  </div>
              )}
            </div>

            {/* BOTÓN 2: DIA DE LA MADRE */}
            <div className="activity-item">
              <button 
                className={`activity-button ${activeActivity === 'madre' ? 'active' : ''}`}
                onClick={() => setActiveActivity(activeActivity === 'madre' ? null : 'madre')}
              >
                2. DIA DE LA MADRE
                <span>{activeActivity === 'madre' ? '▲' : '▼'}</span>
              </button>
              
              {activeActivity === 'madre' && (
                <div className="activity-content">
                  <div className="aip-detail-images-grid">
                    {madreImages.map((img, index) => (
                      <div className="aip-image-card" key={index}>
                        <img 
                          src={img} 
                          alt={`Día de la Madre - Imagen ${index + 1}`} 
                          className={getImageEffectClass(index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
        </>
      )}
    </main>
  );
}
