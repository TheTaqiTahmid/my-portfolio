import React, { useEffect, useState, useRef } from 'react'
import { Menu, Sun, Moon, FileText, Mail, Check, Copy } from 'lucide-react'
import { COLORS, EMAIL, RESUME } from '../constants'
import { Tooltip } from './Tooltip'

interface NavProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Navbar: React.FC<NavProps> = ({ toggleDarkMode, darkMode }) => {
  const [copied, setCopied] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const copyText = copied ? 'Copied!' : 'Click to copy'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email', err)
    }
  }

  useEffect(() => {
    localStorage.setItem('DARK_MODE', String(darkMode))
  }, [darkMode])

  useEffect(() => {
    const handleClickoutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickoutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickoutside)
    }
  }, [isMenuOpen])

  const menuItem = [
    { title: 'Home', href: '/' },
    { title: 'Experience', href: '/experience' },
    { title: 'Projects', href: '/projects' },
    { title: 'Interests', href: '/interests' },
  ]

  return (
    <div className="w-full flex justify-center">
      <nav className="py-5 mb-6 flex justify-between dark:text-white w-full max-w-5xl px-4">
        <Tooltip label={copyText} position="bottom">
          <button
            onClick={handleCopyEmail}
            className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors duration-200 group relative"
          >
            <Mail size={25} className={`${COLORS.DARK_PRIMARY}`} />
            {copied ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            )}
          </button>
        </Tooltip>
        <ul className="flex items-center">
          <li
            className="transition ease-in-out delay-50 duration-100 cursor-pointer"
            onClick={toggleDarkMode}
          >
            <Tooltip label={darkMode ? 'Light Mode' : 'Dark Mode'} position="bottom">
              <div className="flex items-center space-x-2 mr-4">
                {darkMode ? (
                  <Sun className="text-amber-400 hover:scale-110" size={30} />
                ) : (
                  <Moon size={24} />
                )}
              </div>
            </Tooltip>
          </li>
          <li className="transition ease-in-out delay-50 duration-100">
            <Tooltip label="Resume" position="bottom">
              <a
                className="text-white flex items-center space-x-2 ml-4"
                href={RESUME}
                target="_blank"
                rel="noreferrer"
              >
                <FileText className="hover:scale-110 text-gray-800 dark:text-white" size={30} />
              </a>
            </Tooltip>
          </li>
          <li className="p-2 ml-5 cursor-pointer">
            <div ref={menuRef} className="group relative">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                <Menu size={24} />
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                // Dropdown Menu. The z value is set to 10 so that it appears above other elements.
                <div className="absolute right-0 mt-3 w-36 rounded-md shadow-lg bg-amber-50 dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {menuItem.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-00 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
                        role="menuitem"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
