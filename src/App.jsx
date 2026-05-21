import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [activeMenu, setActiveMenu] = useState('presentacion')

  return (
    <div className="app-container">
      <Header />
      <div className="app-body">
        <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />
        <MainContent activeMenu={activeMenu} />
      </div>
      <Footer />
    </div>
  )
}

export default App
