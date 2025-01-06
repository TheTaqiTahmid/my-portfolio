import React, { useEffect, useState, useRef } from 'react';
import { Menu, Sun, Moon, FileText, Mail, Check, Copy } from "lucide-react";
import { COLORS, EMAIL } from '../constants';

interface NavProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavProps> = ({toggleDarkMode, darkMode}) => {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email');
    }
  };

  useEffect(() => {
    localStorage.setItem('DARK_MODE', String(darkMode))
  },[darkMode])

  const menuItem = [
    {title: 'Home', href: '/'},
    {title: 'Experience', href: '/experience'},
    {title: 'Projects', href: '/projects'},
    {title: 'Interests', href: '/interests'},
  ]

  return (
    <div className="w-full flex justify-center">
      <nav className="py-5 mb-6 flex justify-between dark:text-white w-full max-w-5xl px-4">
          <button 
            onClick={handleCopyEmail}
            className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors duration-200 group relative"
          >
            <Mail size={25} className={`${COLORS.DARK_PRIMARY}`} />
            <span>Email</span>
            {copied ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            )}
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-slate-100 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-slate-800 before:content-[''] group-hover:opacity-100">
              {copied ? 'Copied!' : 'Click to copy'}
            </span>
          </button>
          
          <ul className="flex items-center">
              <li className="transition ease-in-out delay-50 duration-100 cursor-pointer"
              onClick={toggleDarkMode}>
                <div className="group relative">
                  {darkMode ? <Sun className='text-amber-400 hover:scale-110' size={30} /> : <Moon size={24} />}
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-slate-100 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-slate-800 before:content-[''] group-hover:opacity-100">
                    {darkMode ? "Light Mode": "Dark Mode"}
                </span>
                </div>
              </li>
              <li className="transition ease-in-out delay-50 duration-100">
                  <div className="group relative">
                  <a className="text-white p-2 ml-8 inline-flex" 
                  href="https://www.linkedin.com/in/taqi-tahmid/details/featured/1735981754176/single-media-viewer/?profileId=ACoAACDU_GsBCgKtvw2bmzbVwTy2WixBG6-e3JM" 
                  target="_blank" 
                  rel="noreferrer">
                    <FileText className="hover:scale-110 text-gray-800 dark:text-white" size={30} />
                  </a>
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-slate-100 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-slate-800 before:content-[''] group-hover:opacity-100">
                    Resume
                  </span>
                  </div>
              </li>
              <li className="p-2 ml-5 cursor-pointer">
                <div ref={menuRef} className="group relative">
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='focus:outline-none'>
                    <Menu size={24}/>
                  </button>

                  {/* Dropdown Menu */}
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-3 w-36 rounded-md shadow-lg bg-amber-50 dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {menuItem.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-00 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
                            role='menuitem'
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
  );
};

export default Navbar;