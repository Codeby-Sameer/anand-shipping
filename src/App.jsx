import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Servicespage'
import Contact from './pages/Contact'
import ScrollToTop from './components/common/ScrolltoTop'
import TrackingPage from './pages/TrackingPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tracking" element={<TrackingPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App