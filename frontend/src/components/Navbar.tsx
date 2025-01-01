import React from "react"
import { Sun, Moon, FileText } from "lucide-react"

interface NavProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Navbar: React.FC<NavProps> = ({toggleDarkMode, darkMode}) => {
  return (
    <div className="w-full flex justify-center">
      <nav className="py-5 mb-12 flex justify-between dark:text-white w-full max-w-5xl px-4">
          <h1>taqitahmid@gmail.com</h1>
          <ul className="flex items-center">
              <li className="transition ease-in-out delay-100 hover:scale-110 duration-300 cursor-pointer"
              onClick={toggleDarkMode}>
                <div className="bg-blue-900 hover:bg-blue-1000 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-2 rounded-lg ml-8 shadow-sm">
                  {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </div>
              </li>
              <li className="transition ease-in-out delay-150 hover:scale-110 duration-300">
                  <a className="bg-blue-900 hover:bg-blue-1000 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-2 rounded-lg ml-8 shadow-sm inline-flex" 
                  href="https://www.linkedin.com/in/taqi-tahmid/overlay/1635520467350/single-media-viewer/?profileId=ACoAACDU_GsBCgKtvw2bmzbVwTy2WixBG6-e3JM" 
                  target="_blank" 
                  rel="noreferrer">
                    <FileText size={24} />
                  </a>
              </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar