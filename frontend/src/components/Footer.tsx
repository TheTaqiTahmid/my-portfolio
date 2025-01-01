import { Server, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Server size={16} className="inline-block" />
            <span>Self-hosted on my homelab Kubernetes cluster</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-center">
            <span>© {currentYear} Taqi Tahmid</span>
            <span>•</span>
            <span>Built with React & Tailwind CSS</span>
            <span>•</span>
            <a 
              href="https://github.com/TheTaqiTahmid/portfolio" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              View Source
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <Coffee size={14} className="inline-block" />
            <span>
              Powered by coffee and countless hours of debugging
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;