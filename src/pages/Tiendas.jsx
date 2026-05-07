import { useState } from 'react'
import './Tiendas.css'

const tiendas = [
  { id:1, nombre:'Fashion Market Culiacán', dir:'Blvd. Insurgentes 3553, Col. Campiña, Culiacán', estado:'Sinaloa' },
  { id:2, nombre:'Fashion Market Los Mochis', dir:'Blvd. Jiquilpan s/n, Col. Las Fuentes, Los Mochis', estado:'Sinaloa' },
  { id:3, nombre:'Fashion Market Mazatlán', dir:'Av. Rafael Buelna 2760, Col. Palos Prietos, Mazatlán', estado:'Sinaloa' },
  { id:4, nombre:'Fashion Market Guadalajara', dir:'Av. Vallarta 3959, Col. Don Bosco, Guadalajara', estado:'Jalisco' },
  { id:5, nombre:'Fashion Market Zapopan', dir:'Av. Patria 2085, Col. Jardines de Guadalupe, Zapopan', estado:'Jalisco' },
  { id:6, nombre:'Fashion Market Puerto Vallarta', dir:'Blvd. Francisco Medina Ascencio 2485, Puerto Vallarta', estado:'Jalisco' },
  { id:7, nombre:'Fashion Market Monterrey', dir:'Av. Gonzalitos 600 Nte., Col. Mitras Centro, Monterrey', estado:'Nuevo León' },
  { id:8, nombre:'Fashion Market San Nicolás', dir:'Av. Lázaro Cárdenas 3000, San Nicolás de los Garza', estado:'Nuevo León' },
  { id:9, nombre:'Fashion Market Iztapalapa', dir:'Av. Ermita Iztapalapa 2000, Col. Santa Martha, CDMX', estado:'CDMX' },
  { id:10, nombre:'Fashion Market Vallejo', dir:'Av. Montevideo 100, Col. Industrial Vallejo, Azcapotzalco', estado:'CDMX' },
  { id:11, nombre:'Fashion Market Naucalpan', dir:'Blvd. Toluca 3, Col. Industrial Naucalpan, Naucalpan', estado:'Estado de México' },
  { id:12, nombre:'Fashion Market Cuautitlán Izcalli', dir:'Av. Central s/n, Cuautitlán Izcalli', estado:'Estado de México' },
  { id:13, nombre:'Fashion Market Hermosillo', dir:'Blvd. Morelos 369 Pte., Col. San Benito, Hermosillo', estado:'Sonora' },
  { id:14, nombre:'Fashion Market Los Cabos', dir:'Blvd. Forjadores s/n, Col. Fuentes del Valle, San José del Cabo', estado:'Baja California Sur' },
  { id:15, nombre:'Fashion Market Cancún', dir:'Av. López Portillo, Plaza Las Américas, Cancún', estado:'Quintana Roo' },
]

export default function Tiendas() {
  const [query, setQuery] = useState('')

  const q = query.toLowerCase().trim()
  const filtered = tiendas.filter(t =>
    t.nombre.toLowerCase().includes(q) ||
    t.estado.toLowerCase().includes(q) ||
    t.dir.toLowerCase().includes(q)
  )

  const byEstado = filtered.reduce((acc, t) => {
    if (!acc[t.estado]) acc[t.estado] = []
    acc[t.estado].push(t)
    return acc
  }, {})

  return (
    <>
      <div className="tiendas-hero">
        <div className="container">
          <h1>Nuestras <em>tiendas</em></h1>
          <p>Encuentra el Fashion Market más cercano a ti en toda la república mexicana.</p>
        </div>
      </div>

      <section className="tiendas-section">
        <div className="container">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar por ciudad, estado o nombre…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>

          {Object.keys(byEstado).length === 0 ? (
            <div className="no-results">
              <span>🔍</span>
              <p>No encontramos tiendas con "{query}"</p>
            </div>
          ) : (
            Object.entries(byEstado).map(([estado, lista]) => (
              <div key={estado} className="estado-group">
                <div className="estado-label">
                  <span className="estado-nombre">📍 {estado}</span>
                  <span className="estado-badge">{lista.length} tienda{lista.length > 1 ? 's' : ''}</span>
                </div>
                <div className="tiendas-grid">
                  {lista.map(t => (
                    <div key={t.id} className="tienda-card">
                      <div className="tc-header">
                        <div className="tc-icon">🏬</div>
                        <span className="tc-nombre">{t.nombre}</span>
                      </div>
                      <p className="tc-dir">📌 {t.dir}</p>
                      <span className="tc-horario">🕙 Lun–Dom 10:00 – 21:00 h</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  )
}
