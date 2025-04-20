import { Github, Linkedin, Mail, Twitter, Globe, Calendar } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="p-4 max-w-xs mx-auto">
      <h2 className="text-blue-800 dark:text-blue-600 mb-2">Contact</h2>
      <div className="mb-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-sm">
        <div className="flex items-center">
          <Mail size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
          <a href="mailto:taqitahmid@gmail.com" className="text-blue-600 dark:text-blue-400">
            taqitahmid@gmail.com
          </a>
        </div>
      </div>
      <div className="mb-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-sm">
        <div className="flex items-center">
          <Globe size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
          <a href="https://portfolio.tahmidcloud.com" className="text-blue-600 dark:text-blue-400">
            My Website
          </a>
        </div>
      </div>
      <h2 className="text-blue-800 dark:text-blue-600 mb-2">Connect</h2>
      <div className="mb-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-sm">
        <div className="flex items-center">
          <Linkedin size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
          <a
            href="https://www.linkedin.com/in/taqi-tahmid/"
            className="text-blue-600 dark:text-blue-400"
          >
            Taqi Tahmid
          </a>
        </div>
      </div>
      <div className="mb-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-sm">
        <div className="flex items-center">
          <Github size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
          <a href="https://github.com/TheTaqiTahmid" className="text-blue-600 dark:text-blue-400">
            TheTaqiTahmid
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
