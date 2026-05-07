import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">FM<span>.</span></div>
            <p className="footer-tag">Tu outlet de marcas exclusivas. Ropa, tenis y accesorios a precios increíbles todo el año.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/FashionMarketOutlet" target="_blank" rel="noreferrer">f</a>
              <a href="https://www.instagram.com/fashionmarketoutlet/" target="_blank" rel="noreferrer">ig</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tiendas">Tiendas</Link></li>
              <li><Link to="/conocenos">Conócenos</Link></li>
              <li><Link to="/faq">Preguntas frecuentes</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Aviso de privacidad</a></li>
              <li><a href="#">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>2025 © Fashion Market — Todos los derechos reservados</span>
          <span>Powered by Coppel</span>
        </div>
      </div>
    </footer>
  )
}
