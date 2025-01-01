import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = (): void => {
    console.log("Dark Mode")
    setDarkMode(!darkMode)
  }
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          <Introduction></Introduction>
          <Skills></Skills>
          <Footer></Footer>
        </section>
      </main>
    </div>
    </>
  )
}         

export default App