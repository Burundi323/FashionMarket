import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQ.css'

const faqs = [
  { q: '¿Qué es Fashion Market?', a: 'Es un outlet que ofrece las marcas preferidas del mercado mexicano, tanto nacionales como internacionales. Cuenta con descuentos permanentes para toda la familia, asegurando que luzcas increíble durante todo el año.' },
  { q: '¿Qué puedo comprar en Fashion Market?', a: 'Disfruta de una gran variedad de ropa, calzado y accesorios de las mejores marcas para toda la familia. También encontrarás perfumes, relojes, lentes, decoración, equipaje, artículos para mascotas y mucho más a precios increíbles.' },
  { q: '¿Qué marcas puedo encontrar?', a: '¡Tenemos más de 100 marcas exclusivas! Algunas de las que encontrarás son Adidas, Puma, Levi\'s, Nautica, Timberland, American Eagle, Bebé, Guess, Steve Madden y muchas más.' },
  { q: '¿Puedo comprar con mi Crédito Coppel?', a: 'Sí, puedes utilizar tu Crédito Coppel para estrenar lo que quieras en Fashion Market.' },
  { q: '¿Cuáles son los beneficios de comprar en Fashion Market?', a: 'En Fashion Market encontrarás los beneficios que ya conoces de Tiendas Coppel: compras seguras, cambios y devoluciones, gran variedad de productos exclusivos y marcas reconocidas a un superprecio, además de la posibilidad de adquirirlas con tu Crédito Coppel y acumular Dinero Electrónico con el Programa de Recompensas Coppel Max.' },
  { q: '¿En dónde se encuentran las tiendas?', a: 'Contamos con sucursales en CDMX, Estado de México, Sinaloa, Jalisco, Nuevo León, Sonora, Baja California Sur y Quintana Roo. Puedes encontrar la más cercana en nuestra sección de Tiendas.' },
  { q: '¿Fashion Market cuenta con tienda en línea?', a: 'No, Fashion Market es exclusivo en tiendas físicas. Sin embargo, en cada sucursal contamos con módulos de Coppel.com para que conozcas nuestro catálogo completo.' },
  { q: '¿Puedo hacer cambios o devoluciones?', a: 'Sí, cuentas con 30 días para realizar un cambio o devolución. No aplica en artículos de ropa interior, fajas, perfumes, joyería, artículos de cuidado personal, artículos de limpieza y alimentos.' },
  { q: '¿Cuáles son las formas de pago?', a: 'Aceptamos pagos en efectivo, tarjetas de crédito y débito, y tu Crédito Coppel. Además, obtén meses sin intereses en bancos participantes: 3 MSI en compra mínima de $1,000 y 6 MSI en compra mínima de $2,000.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = i => setOpen(open === i ? null : i)

  return (
    <>
      <div className="faq-hero">
        <div className="container">
          <span className="section-ey">Atención al cliente</span>
          <h1>Preguntas <em>frecuentes</em></h1>
          <p>Encuentra respuestas a las dudas más comunes sobre Fashion Market.</p>
        </div>
      </div>

      <section className="faq-section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                <button className="faq-header" onClick={() => toggle(i)}>
                  <span>{f.q}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-body">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="container">
          <h2 className="section-title">¿Listo para <em>estrenar</em>?</h2>
          <p>Visita la tienda más cercana y aprovecha todos los descuentos.</p>
          <Link to="/tiendas" className="btn btn-orange">Encuentra tu tienda</Link>
        </div>
      </section>
    </>
  )
}
