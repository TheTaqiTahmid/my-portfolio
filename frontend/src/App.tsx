import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Experience from './pages/Experience';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = (): void => {
    console.log("Dark Mode")
    setDarkMode(!darkMode)
  }
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-amber-50 px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/experience' element={<Experience/>} />
            </Routes>
          </Router>
          <Footer />
        </section>
      </main>
    </div>
    </>
  )
}         

export default App