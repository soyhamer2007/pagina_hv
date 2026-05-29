import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [activeMenu, setActiveMenu] = useState('presentacion');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleMenuChange = (menuId) => {
    setActiveMenu(menuId);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="app-container">
      <Header isCollapsed={isCollapsed} />
      <div className="app-body">
        <Sidebar 
          activeMenu={activeMenu} 
          onMenuChange={handleMenuChange} 
          isCollapsed={isCollapsed} 
          onToggle={toggleSidebar} 
        />
        <MainContent activeMenu={activeMenu} />
      </div>
      <Footer />
    </div>
  )
}

export default App
