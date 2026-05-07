import { Link } from 'react-router-dom'
import imgTienda from '../assets/img-tienda.png'
import imgCoppel from '../assets/img-coppel.webp'
import './Conocenos.css'

export default function Conocenos() {
  return (
    <>
      <div className="conocenos-hero">
        <div className="container">
          <span className="section-ey">Sobre nosotros</span>
          <h1>Acerca de <em>Fashion Market</em></h1>
          <p>El outlet de marcas reconocidas que te permite lucir increíble sin gastar de más.</p>
        </div>
      </div>

      <section className="conocenos-about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img">
              <img src={imgTienda} alt="Interior Fashion Market" />
            </div>
            <div className="about-text">
              <span className="section-ey">Quiénes somos</span>
              <h2 className="section-title">Tu outlet de moda favorito</h2>
              <p>Fashion Market es un outlet de marcas reconocidas a nivel nacional e internacional como Adidas, Puma, Levi's, Nautica, Timberland, American Eagle, Bebé, Guess, Steve Madden y muchas más.</p>
              <p>En Fashion Market puedes adquirir productos para toda la familia a un buen precio todos los días del año. Es el lugar perfecto para encontrar ropa, zapatos, accesorios, perfumes, relojes, lentes, decoración, equipaje y mucho más.</p>
              <Link to="/tiendas" className="btn btn-orange" style={{ marginTop: '24px' }}>Encuentra tu tienda</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="conocenos-valores">
        <div className="container">
          <span className="section-ey">Nuestros valores</span>
          <h2 className="section-title" style={{ marginBottom: '40px' }}>¿Por qué Fashion Market?</h2>
          <div className="valores-grid">
            {[
              { icon: '🏷️', title: 'Precios Outlet', desc: 'Descuentos permanentes en más de 100 marcas exclusivas nacionales e internacionales.' },
              { icon: '🛍️', title: 'Variedad Total', desc: 'Ropa, calzado, accesorios, perfumes, relojes, lentes y mucho más para toda la familia.' },
              { icon: '✅', title: '100% Originales', desc: 'Todos los productos son auténticos. Calidad garantizada en cada compra.' },
              { icon: '🔄', title: 'Cambios y Devoluciones', desc: '30 días para realizar cambios o devoluciones. Tu satisfacción es lo más importante.' },
              { icon: '💳', title: 'Crédito Coppel', desc: 'Acepta tu Crédito Coppel y acumula Dinero Electrónico con Coppel Max.' },
              { icon: '🏬', title: 'Tiendas Físicas', desc: 'Sucursales en todo México para que siempre tengas una cerca de ti.' },
            ].map(v => (
              <div key={v.title} className="valor">
                <span className="valor-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="conocenos-coppel">
        <div className="container">
          <div className="coppel-grid">
            <div className="coppel-text">
              <span className="section-ey">Beneficios adicionales</span>
              <h2 className="section-title">Más servicios en nuestras tiendas</h2>
              <ul className="coppel-list">
                <li>💳 Abona a tu Crédito Coppel</li>
                <li>💰 Retiros y depósitos a cuentas bancarias</li>
                <li>📱 Módulos de Coppel.com</li>
                <li>🎁 Programa de Recompensas Coppel Max</li>
                <li>💳 Meses sin intereses con bancos participantes</li>
              </ul>
            </div>
            <div className="coppel-img">
              <img src={imgCoppel} alt="Tarjeta Coppel y BanCoppel" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
