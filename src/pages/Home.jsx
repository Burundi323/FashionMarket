import { Link } from 'react-router-dom'
import imgHombre from '../assets/img-hombre.jpg'
import imgMujer from '../assets/img-mujer.png'
import imgNino from '../assets/img-nino.png'
import imgCalzado from '../assets/img-calzado.jpg'
import imgTienda from '../assets/img-tienda.png'
import imgCoppel from '../assets/img-coppel.webp'
import './Home.css'

const brands = ['Adidas', 'American Eagle', 'Bebé', 'Guess', 'Levi\'s', 'Nautica', 'Puma', 'Steve Madden', 'Timberland']

const reviews = [
  { name: 'Diana', text: 'No te cansas de ver cosas con excelentes precios. Siempre encuentro algo nuevo.' },
  { name: 'Giovani', text: 'Excelente variedad de ropa. La selección de marcas es increíble y los precios inmejorables.' },
  { name: 'Gaby', text: 'Súper precios. La ropa para niños es muy bonita, mis hijos siempre salen contentos.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-glow" />
        </div>
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-badge">Outlet de Marcas Exclusivas</span>
            <h1 className="hero-title">Tu estilo,<br /><em>tu ahorro.</em></h1>
            <p className="hero-sub">Las mejores marcas de moda a precios increíbles todo el año. Ropa, tenis y accesorios.</p>
            <div className="hero-btns">
              <Link to="/tiendas" className="btn btn-orange">Encuentra tu tienda</Link>
              <a href="#categorias" className="btn btn-ghost">Ver colecciones</a>
            </div>
          </div>
          <div className="hero-cards">
            <div className="hero-card">
              <span className="htag">Nuevo</span>
              <img src={imgCalzado} alt="Tenis temporada" />
              <p>Tenis de temporada</p>
            </div>
            <div className="hero-card hero-card--mid">
              <span className="htag htag--white">-40%</span>
              <img src={imgHombre} alt="Moda Mujer" />
              <p>Moda Mujer</p>
            </div>
            <div className="hero-card">
              <span className="htag">Trending</span>
              <img src={imgNino} alt="Colección Hombre" />
              <p>Col. Hombre</p>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {[...brands, ...brands].map((b, i) => (
            <span key={i}>{b}</span>
          ))}
        </div>
      </div>

      {/* CATEGORÍAS */}
      <section className="categorias" id="categorias">
        <div className="container">
          <span className="section-ey">Colecciones</span>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>Descuentos todo el año</h2>
          <div className="cat-grid">
            <div className="cat cat--large">
              <img src={imgHombre} alt="Mujeres" />
              <div className="cat-overlay">
                <h3>Mujeres</h3>
                <span>Ver colección →</span>
              </div>
            </div>
            <div className="cat">
              <img src={imgNino} alt="Hombres" />
              <div className="cat-overlay">
                <h3>Hombres</h3>
                <span>Ver colección →</span>
              </div>
            </div>
            <div className="cat">
              <img src={imgTienda} alt="Perfumeria" />
              <div className="cat-overlay">
                <h3>Perfumeria</h3>
                <span>Ver colección →</span>
              </div>
            </div>
            <div className="cat">
              <img src={imgCalzado} alt="Calzado" />
              <div className="cat-overlay">
                <h3>Calzado</h3>
                <span>Ver colección →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="marcas">
        <div className="container">
          <span className="section-ey">Partners</span>
          <h2 className="section-title" style={{ marginBottom: '28px' }}>Las mejores marcas</h2>
          <div className="marcas-grid">
            {brands.map(b => <div key={b} className="marca-pill">{b}</div>)}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="beneficios">
        <div className="container">
          <span className="section-ey">Por qué elegirnos</span>
          <h2 className="section-title" style={{ marginBottom: '36px' }}>La experiencia Fashion Market</h2>
          <div className="bene-grid">
            <div className="bene">
              <span className="bene-icon">🏷️</span>
              <h3>Precios Outlet</h3>
              <p>Descuentos reales todo el año en las mejores marcas nacionales e internacionales.</p>
            </div>
            <div className="bene">
              <span className="bene-icon">✅</span>
              <h3>100% Originales</h3>
              <p>Calidad garantizada en cada producto. Todo lo que encuentras es completamente original.</p>
            </div>
            <div className="bene">
              <div className="bene-img-wrap">
                <img src={imgCoppel} alt="Crédito Coppel" />
              </div>
              <h3>Crédito Coppel</h3>
              <p>Acepta tu Crédito Coppel en todas nuestras tiendas. Compra fácil y cómodo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIENDA INTERIOR */}
      <section className="tienda-banner">
        <div className="container">
          <div className="tienda-banner-inner">
            <img src={imgTienda} alt="Interior Fashion Market" />
            <div className="tienda-banner-text">
              <span className="section-ey">Nuestras tiendas</span>
              <h2 className="section-title">Ven y descubre la experiencia Fashion Market</h2>
              <p>Tiendas en todo el país con los mejores productos de marcas exclusivas a precios outlet.</p>
              <Link to="/tiendas" className="btn btn-orange" style={{ marginTop: '24px' }}>Encuentra tu tienda</Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="reviews">
        <div className="container">
          <span className="section-ey">Reseñas</span>
          <h2 className="section-title" style={{ marginBottom: '36px' }}>Lo que dicen nuestros clientes</h2>
          <div className="reviews-grid">
            {reviews.map(r => (
              <div key={r.name} className="review">
                <div className="review-stars">★★★★★</div>
                <p>"{r.text}"</p>
                <span>— {r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2 className="section-title">Visítanos y aprovecha los <em>descuentos</em></h2>
          <p>Tenemos tiendas en toda la república. Encuentra la más cercana a ti.</p>
          <Link to="/tiendas" className="btn btn-white">Ver todas las tiendas</Link>
        </div>
      </section>
    </>
  )
}
