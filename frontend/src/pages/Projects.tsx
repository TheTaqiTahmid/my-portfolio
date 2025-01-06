import { Github, Link } from "lucide-react";
import { COLORS } from "../constants";

const Projects = () => {
  const BoldStyle = "text-blue-900 dark:text-blue-300 font-semibold";
  
  const projects = [
    {
      title: "Self-Hosted Kubernetes Homelab Cluster",
      description: "Architected and deployed a production-grade Kubernetes cluster in my homelab environment, showcasing infrastructure-as-code principles and modern DevOps practices. The cluster hosts a diverse ecosystem of services including my portfolio website, high-availability database, private container image registry, network-wide ad-blocking solution using AdGuard, and a comprehensive media server stack.",
      technologies: ["Kubernetes", "KVM", "Linux", "Go", "Docker", "Helm", "MetalLB"],
      links: [
        {
          icon: <Github size={24} />,
          href: "https://github.com/yourusername/k8s-monitoring",
          label: "GitHub"
        }
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: "Engineered and deployed a modern, responsive portfolio website using React, showcasing professional experience and technical projects. The website features a clean, intuitive design with dark/light theme support, responsive layouts, and smooth transitions. The site utilizes React's latest features and Tailwind CSS for styling. The entire application is containerized using Docker and deployed on a personal Kubernetes cluster, demonstrating a full DevOps pipeline from development to production.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Docker",
        "Kubernetes",
        "Nginx"
      ],
      links: [
        {
          icon: <Github size={24} />,
          href: "https://github.com/TheTaqiTahmid/my-portfolio",
          label: "GitHub"
        },
        {
          icon: <Link size={24} />,
          href: "https://portfolio.tahmidcloud.com",
          label: "Live Demo"
        }
      ]
    },
    {
      title: "Automated Crypto Trading Bot",
      description: "Engineered a Python-based cryptocurrency trading bot that interfaces with Binance's API to execute automated trades based on custom strategies. The bot implements real-time price monitoring, configurable stop-loss and take-profit mechanisms, and intelligent position management. It features a robust risk management system, detailed trade logging, and performance analytics. The bot can handle multiple trading pairs simultaneously.",
      technologies: ["Python", "Binance API", "Pandas", "NumPy"],
      links: [
        {
          icon: <Github size={24} />,
          href: "https://github.com/TheTaqiTahmid/binanceCryptoBot",
          label: "GitHub"
        }
      ]
    },
    {
      title: "Command Line Todo Application",
      description: "Developed a fast and efficient CLI-based Todo application in Go that enables seamless task management through simple terminal commands. The application leverages Go's strong concurrency features. Users can perform CRUD operations (Create, Read, Update, Delete) on tasks.",
      technologies: ["Go", "Cobra CLI"],
      links: [
        {
          icon: <Github size={24} />,
          href: "https://github.com/TheTaqiTahmid/todo",
          label: "GitHub"
        }
      ]
    }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className={`text-4xl text-center py-2 mb-8 ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} font-medium font-mono tracking-wide`}>
        Projects
      </h1>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className={`text-2xl mb-2 ${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY}`}>
              {project.title}
            </h2>
            
            <p className={`mb-4 ${COLORS.TEXT} ${COLORS.DARK_TEXT} leading-7`}>
              {project.description}
            </p>
            
            <div className="mb-4">
              <span className={BoldStyle}>Technologies: </span>
              <span className={`${COLORS.TEXT} ${COLORS.DARK_TEXT}`}>
                {project.technologies.join(", ")}
              </span>
            </div>

            <div className="flex gap-4">
              {project.links.map((link, linkIndex) => (
                <div key={linkIndex} className="group relative">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${COLORS.PRIMARY} ${COLORS.DARK_PRIMARY} hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-200`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-sm text-slate-100 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-slate-800 before:content-[''] group-hover:opacity-100">
                    {link.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;