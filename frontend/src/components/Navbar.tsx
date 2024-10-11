import React from "react"

interface NavProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Navbar: React.FC<NavProps> = ( {toggleDarkMode, darkMode} ) => {
  const mode = darkMode ? "Light" : "Dark"
  return (
    <>
      <nav className="py-5 mb-12 flex justify-between dark:text-white">
          <h1>taqitahmid@gmail.com</h1>
          <ul className="flex items-center">
              <li className="transition ease-in-out delay-100 hover:scale-110 duration-300 cursor-pointer dark:text-white"
              onClick={toggleDarkMode}>
                <div className="bg-gradient-to-r from-blue-900 to-sky-600 text-white px-4 py-2 rounded-md ml-8" >
                  {mode}
                </div>
              </li>
              <li className="transition ease-in-out delay-150 hover:scale-110 duration-300">
                  <a className="bg-gradient-to-r from-blue-900 to-sky-600 text-white px-4 py-2 rounded-md ml-8" 
                  href="https://www.linkedin.com/in/taqi-tahmid/overlay/1635520467350/single-media-viewer/?profileId=ACoAACDU_GsBCgKtvw2bmzbVwTy2WixBG6-e3JM" 
                  target="_blank" 
                  rel="noreferrer">Resume</a>
              </li>
          </ul>
      </nav>
    </>
  )
}

export default Navbar