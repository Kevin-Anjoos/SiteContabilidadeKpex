import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { SobreNosPage } from './Components/Pages/SobreNosPage'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { HomePage } from './Components/Pages/HomePage'
import { FaleConoscoPage } from './Components/Pages/FaleConoscoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sobre-nos' element={<SobreNosPage />} />
          <Route path='/fale-conosco' element={<FaleConoscoPage />} />
        </Routes>
      </main>
      <h1>Kpex Soluções</h1>
      <Footer />
    </>
  )
}

export default App
