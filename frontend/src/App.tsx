import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Interests from './pages/Interests'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('DARK_MODE')
    return savedMode ? JSON.parse(savedMode) : true
  })
  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <main className="bg-amber-50 px-10 dark:bg-gray-900">
          <section className="min-h-screen">
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <div className="md:flex md:flex-row md:h-full">
              <div className="mb-4 md:w-1/4 md:max-w-[260px] md:max-h-[900px] border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
                <Sidebar />
              </div>
              <div className="md:flex-1">
                <Router>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/Interests" element={<Interests />} />
                  </Routes>
                </Router>
              </div>
            </div>
            <Footer />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
