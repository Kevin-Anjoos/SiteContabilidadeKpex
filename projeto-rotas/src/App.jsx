import './App.css'
import { Routes, Route } from 'react-router-dom'
import { SobreNosPage } from './Components/Pages/SobreNosPage'
import { ServicosPage } from './Components/Pages/ServicosPage'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { HomePage } from './Components/Pages/HomePage'
import { FaleConoscoPage } from './Components/Pages/FaleConoscoPage'

function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/servicos' element={<ServicosPage />} />
          <Route path='/sobre-nos' element={<SobreNosPage />} />
          <Route path='/fale-conosco' element={<FaleConoscoPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
