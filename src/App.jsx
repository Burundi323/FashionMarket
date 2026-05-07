import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tiendas from './pages/Tiendas'
import Conocenos from './pages/Conocenos'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
